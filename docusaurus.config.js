const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Olympus Wiki',
  tagline: 'Olympus Wiki',
  url: 'https://wiki.olympusgg.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OlympusGG', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'wiki', // Usually your repo name.
  themeConfig:
    ({
      navbar: {
        title: 'Olympus Wiki',
        logo: {
          alt: 'Olympus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Home',
          },
          {
            to: 'blog',
            label: 'Changelogs',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Olympus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'Z1PIPBOW0R',
        apiKey: 'f032471bf98ab55cc7b99257ca3545a4',
        indexName: 'prod_DOC',
        contextualSearch: false,
        searchParameters: {}
      },
    }),
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OlympusGG/wiki/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
});
