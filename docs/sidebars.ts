import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  mainSideBar: [
    {
      type: 'html',
      value: '<div>Overview</div>',
      className: 'sidebarcategory',
    },
    {
      type: 'doc',
      id: 'overview/intro', // document ID
      label: 'Introduction', // sidebar label
    },
    {
      type: 'doc',
      id: 'overview/platform',
      label: 'Platform',
    },
    {
      type: 'category',
      label: 'Use cases',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'overview/use-cases/anonymization',
          label: 'Anonymize Data',
        },
        {
          type: 'doc',
          id: 'overview/use-cases/synthetic-data',
          label: 'Synthetic Data',
        },
        {
          type: 'doc',
          id: 'overview/use-cases/subsetting',
          label: 'Subset Data',
        },
        {
          type: 'doc',
          id: 'overview/use-cases/replication',
          label: 'Replicate Data',
        },
      ],
    },
    {
      type: 'doc',
      id: 'overview/core-concepts',
      label: 'Core Concepts',
    },
    {
      type: 'category',
      label: 'Neosync CLI',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'cli/intro',
          label: 'Introduction',
        },
        {
          type: 'doc',
          id: 'cli/installing',
          label: 'Installing',
        },
        {
          type: 'doc',
          id: 'cli/login',
          label: 'login',
        },
        {
          type: 'doc',
          id: 'cli/whoami',
          label: 'whoami',
        },
        {
          type: 'category',
          label: 'accounts',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'cli/accounts/list',
              label: 'list',
            },
            {
              type: 'doc',
              id: 'cli/accounts/switch',
              label: 'switch',
            },
          ],
        },
        {
          type: 'category',
          label: 'jobs',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'cli/jobs/list',
              label: 'list',
            },
            {
              type: 'doc',
              id: 'cli/jobs/trigger',
              label: 'trigger',
            },
          ],
        },
        {
          type: 'doc',
          id: 'cli/version',
          label: 'version',
        },
        {
          type: 'doc',
          id: 'cli/sync',
          label: 'sync',
        },
      ],
    },
    {
      type: 'doc',
      id: 'overview/cloud-security-overview',
      label: 'Cloud Security Overview',
    },
    {
      type: 'html',
      value: '<div>Deploy Neosync</div>',
      className: 'sidebarcategory',
    },
    {
      type: 'doc',
      id: 'deploy/intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'deploy/env-vars',
      label: 'Environment Variables',
    },
    {
      type: 'doc',
      id: 'deploy/kubernetes',
      label: 'Kubernetes',
    },
    {
      type: 'doc',
      id: 'deploy/docker-compose',
      label: 'Docker Compose',
    },
    {
      type: 'doc',
      id: 'deploy/auth',
      label: 'Authentication',
    },

    {
      type: 'html',
      value: '<div>Guides</div>',
      className: 'sidebarcategory',
    },
    {
      type: 'doc',
      id: 'guides/creating-a-sync-job',
      label: 'Creating a Sync Job',
    },
    {
      type: 'doc',
      id: 'guides/creating-a-data-gen-job',
      label: 'Creating a Data Generation Job',
    },
    {
      type: 'doc',
      id: 'guides/custom-code-transformers',
      label: 'Custom Code Transformers',
    },
    {
      type: 'doc',
      id: 'guides/using-neosync-in-ci',
      label: 'Using Neosync in CI',
    },
    {
      type: 'doc',
      id: 'guides/analytics',
      label: 'Configuring Analytics',
    },
    {
      type: 'doc',
      id: 'guides/neosync-local-dev',
      label: 'Developing Neosync Locally',
    },
    {
      type: 'doc',
      id: 'guides/terraform',
      label: 'Neosync Terraform Provider',
    },
    {
      type: 'html',
      value: '<div>Connections</div>',
      className: 'sidebarcategory',
    },
    {
      type: 'doc',
      id: 'connections/postgres',
      label: 'Postgres',
    },
    {
      type: 'doc',
      id: 'connections/mysql',
      label: 'Mysql',
    },
    {
      type: 'doc',
      id: 'connections/s3',
      label: 'S3',
    },
    {
      type: 'html',
      value: '<div>Transformers</div>',
      className: 'sidebarcategory',
    },
    {
      type: 'doc',
      id: 'transformers/introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'transformers/system',
      label: 'System',
    },
    {
      type: 'doc',
      id: 'transformers/user-defined',
      label: 'User Defined',
    },
    {
      type: 'html',
      value: '<div>Table Constraints</div>',
      className: 'sidebarcategory',
    },
    {
      type: 'doc',
      id: 'table-constraints/foreign-keys',
      label: 'Foreign Keys',
    },
    {
      type: 'doc',
      id: 'table-constraints/circular-dependencies',
      label: 'Circular Dependencies',
    },
  ],
};

export default sidebars;
