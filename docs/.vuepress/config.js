module.exports = {
  themeConfig: {
    search: true, // 禁用内置搜索（内置搜索仅可对h2、h3构成索引）
    searchMaxSuggestions: 10, // 对内置搜索最多结果数量进行限制
    // navbar: false, // 禁用导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'MENU有下拉', items: [ // 下拉选项
        { text: 'HTML', link: '/html/' },
        { text: 'CSS', link: '/CSS/' },
        { text: 'JavaScript', link: '/JavaScript/' }
      ]},
      { text: 'MENU无下拉', link: '/vue/' },
    ],
    /* 侧边栏 */
    // sidebar: 'auto'
    sidebar: [
      {
        title: '起始',
        collapsable: false,
        children: [
          '/start/'
        ]
      },
      {
        title: '5月 | 每周阅读',
        collapsable: false,
        children: [
          // 2019年5月
          '/readWeekly/2019-05/',
          '/readWeekly/2019-05/2019-05-17.md'
        ]
      },
      {
        title: 'Vue',
        collapsable: false,
        children: [
          // 李西康分享
          '/vue/$set$delete.md',
          '/vue/compress.md',
          '/vue/draggable.md',
          '/vue/md5.md'
        ]
      }
    ]
  }
}
