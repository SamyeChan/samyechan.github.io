module.exports = {
  themeConfig: {
    search: true, // 禁用内置搜索（内置搜索仅可对h2、h3构成索引）
    searchMaxSuggestions: 10, // 对内置搜索最多结果数量进行限制
    // navbar: false, // 禁用导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '快速跳转', items: [ // 下拉选项
        // { text: 'HTML', link: '/html/' },
        // { text: 'CSS', link: '/CSS/' },
        // { text: 'JavaScript', link: '/JavaScript/' },
        { text: 'Vue', link: '/vue/learn-basic.md' }
      ]}
    ],
    /* 侧边栏 */
    // sidebar: 'auto'
    sidebar: [
      {
        title: '起始',
        collapsable: true,
        children: [
          '/start/'
        ]
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [
          // 基础部分
          '/vue/learn-basic.md',
          // 项目
          '/vue/proj-business-report.md',
          '/vue/proj-realtime-video.md',
          // 李西康分享
          '/vue/set_delete.md',
          '/vue/compress.md',
          '/vue/draggable.md',
          '/vue/md5.md',
          // 练习
          '/vue/demo-where-to-go.md'
        ]
      },
      {
        title: '小程序',
        collapsable: true,
        children: [
          // 基础部分
          '/weapp/learn-weapp-basic.md',
          '/weapp/learn-weapp-cloud.md',
          // 例子部分
          '/weapp/demo-imooc-movie.md'
        ]
      },
      {
        title: '5月 | 每周阅读',
        collapsable: true,
        children: [
          // 2019年5月
          '/readWeekly/2019-05/',
          '/readWeekly/2019-05/2019-05-17.md'
        ]
      },
      {
        title: 'HTML',
        collapsable: true,
        children: [
          '/html/'
        ]
      },
      {
        title: 'CSS',
        collapsable: true,
        children: [
          '/css/',
          '/css/three-characteristic.md'
        ]
      },
      {
        title: 'JavaScript',
        collapsable: true,
        children: [
          '/js/'
        ]
      }
    ]
  }
}
