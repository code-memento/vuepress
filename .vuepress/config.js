module.exports = {
  title: '<Code> Memento',
  description: '...tips and recipes for the busy developer !',
  base: '/docs/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Java',
        link: '/java/',
      },
      {
        text: 'Frontend',
        link: '/frontend/'
      },
      {
        text: 'Tips',
        link: '/tips/'
      },
      {
        text: 'About me',
        link: '/about-me.html'
      }
    ],
    sidebar: 'auto'
    // sidebar: [
    //   '/',
    //   'java/',
    //   'chapter-2/'
    // ]
  },

  head: [
    ['link', { rel: 'icon', href: `/images/coding.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#9c27b0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#9c27b0' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true
}