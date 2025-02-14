import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { ReactElement } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import SignupForm from './SignupForm';

export default function GetaDemoButton(): ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="px-6 w-[188px]">
          Neosync Cloud <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-white  p-6 shadow-xl">
        <DialogHeader>
          <div className="flex justify-center pt-10">
            <Image
              src="https://assets.nucleuscloud.com/neosync/newbrand/logo_text_light_mode.svg"
              alt="NeosyncLogo"
              width="118"
              height="30"
            />
          </div>
          <DialogTitle className="text-gray-900 text-2xl text-center pt-10">
            Get access to Neosync Cloud
          </DialogTitle>
          <DialogDescription className="pt-6 text-gray-900 text-md text-center">
            Want to use Neosync but don&apos;t want to host it yourself?
            Let&apos;s chat.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <SignupForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
