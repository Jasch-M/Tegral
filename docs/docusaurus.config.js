// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tegral',
  tagline: 'Libraries for better Kotlin applications.',
  url: 'https://tegral.zoroark.guru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/tegral_logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'utybo', // Usually your GitHub org/user name.
  projectName: 'tegral', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/utybo/Tegral/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tegral',
        logo: {
          alt: 'Tegral Logo',
          src: 'img/tegral_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'core/index',
            position: 'left',
            label: 'Core',
          },
          {
            type: 'doc',
            docId: 'web/index',
            position: 'left',
            label: 'Web'
          },
          {
            type: 'doc',
            docId: 'about/contributing',
            position: 'left',
            label: 'About'
          },
          {
            href: 'pathname:///api',
            label: 'API',
            position: 'right'
          },
          // {to: '/blog', label: 'Blog', position: 'left'}, // TODO re-add once blog has some content
          {
            href: 'https://github.com/utybo/tegral',
            label: 'GitHub',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // TODO add links
          {
            title: 'Docs',
            items: [
              {
                label: 'Tegral Core',
                to: '/docs/core'
              },
              {
                label: 'Tegral Web',
                to: '/docs/web'
              },
            ],
          },
          // TODO add links
          /*{
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/
          // TODO add links
          {
            title: 'More',
            items: [
              /*{ // TODO re-add when blog has content
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/utybo/Tegral',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tegral maintainers & contributors. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['kotlin', 'groovy', 'toml'],
      },
      announcementBar: {
        id: 'not-released-yet',
        content: '<strong>Tegral has not been released yet!</strong> Check back soon for 0.1!',
        backgroundColor: '#834cff',
        textColor: '#ffffff',
        isCloseable: false
      }
    }),
  plugins: [
    [
      'docusaurus-plugin-ackee',
      {
        domainId: 'cea4d752-ff51-4b02-a9c4-f29765562938',
        server: 'https://ackee.blastoise-1.zoroark.guru',
        detailed: false,
        ignoredLocalhost: false,
        ignoreOwnVisits: true,
        ackeeTrackerFile: 'rowlet.js'
      }
    ]
  ]
};

module.exports = config;