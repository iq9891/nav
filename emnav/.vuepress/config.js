const base = process.env.GH ? '/nav/' : '/'

module.exports = {
  title: '头部组件',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'em-fe/nav',
    editLinks: false,
    searchMaxSuggestions: 5,
    docsDir: 'nav',
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/nav/zh-cn',
    ]
  },
}
