package transformers

import (
	"fmt"
	"math/rand"
	"strings"

	"github.com/benthosdev/benthos/v4/public/bloblang"
	transformer_utils "github.com/nucleuscloud/neosync/worker/internal/benthos/transformers/utils"
)

var emailDomains = []string{
	"gmail.com",
	"yahoo.com",
	"hotmail.com",
	"aol.com",
	"hotmail.fr",
	"msn.com",
	"outlook.com",
	"yahoo.fr",
	"wanadoo.fr",
	"orange.fr",
	"comcast.net",
	"yahoo.co.uk",
	"yahoo.com.br",
	"yahoo.co.in",
	"live.com",
	"free.fr",
	"gmx.de",
	"web.de",
	"yandex.ru",
}

func init() {
	spec := bloblang.NewPluginSpec().Param(bloblang.NewInt64Param("max_length"))

	err := bloblang.RegisterFunctionV2("generate_email", spec, func(args *bloblang.ParsedParams) (bloblang.Function, error) {
		maxLength, err := args.GetInt64("max_length")
		if err != nil {
			return nil, err
		}

		return func() (any, error) {
			res, err := GenerateRandomEmail(maxLength)
			if err != nil {
				return nil, err
			}
			return res, nil
		}, nil
	})

	if err != nil {
		panic(err)
	}
}

/* Generates an email in the format <username@domain.tld> such as jdoe@gmail.com */
func GenerateRandomEmail(maxLength int64) (string, error) {
	fn, err := GenerateRandomFirstName(maxLength)
	if err != nil {
		return "", err
	}
	ln, err := GenerateRandomLastName(int64(4))
	if err != nil {
		return "", err
	}

	//nolint:all
	randValue := rand.Intn(len(emailDomains))

	domain := "@" + emailDomains[randValue]

	email := fmt.Sprintf(`%s.%s%s`, strings.ToLower(fn), strings.ToLower(ln), domain)

	if len(email) > int(maxLength) {
		var filteredDomains []string
		for _, value := range emailDomains {
			if len(value) < int(maxLength)-1 {
				filteredDomains = append(filteredDomains, value)
			}
		}

		//nolint:all
		randValue := rand.Intn(len(filteredDomains))
		domain := "@" + filteredDomains[randValue]

		// get new domain that is less than the max length by filtering it

		un, err := transformer_utils.GenerateRandomStringWithDefinedLength(maxLength - int64(len(domain)))
		if err != nil {
			return "", err
		}

		return fmt.Sprintf(`%s%s`, un, domain), err
	}

	return email, nil
}
