const base = process.env.GH ? '/nav/' : '/'

module.exports = {
  title: 'Nav',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Nav',
      description: 'Nav 的组件'
    },
  },
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'em-fe/nav',
    searchMaxSuggestions: 5,
    docsDir: 'site',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        sidebar: [
          '/',
          '/nav',
        ]
      },
    },
  }
}
