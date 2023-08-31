import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default ({
  lang: 'zh-CN',
  title: '文档中心',
  description: '发群私域通、红包多多、章鱼爆客',

  theme: defaultTheme({
    logo:'/images/logo.png',
    navbar: [
      // NavbarItem
      {
        text: '官网',
        link: 'http://www.faqun.cn',
      },
      // NavbarGroup
      {
        text: '产品',
        children: ['/faqun/', '/hbdd/'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
    sidebar: {
      '/guide/':[
        {
          text: 'Foo',
          link: '/foo/',
          children: [
            // SidebarItem
            {
              text: 'github',
              link: 'https://github.com',
              children: [],
            },
            // 字符串 - 页面文件路径
            '/foo/bar.md',
          ],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],
      '/faqun/': [
        {
          text: 'Guide',
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
      ],
      '/hbdd/': [
        {
          text: 'VuePress Reference',
          collapsible: true,
          children: ['/reference/cli.md', '/reference/config.md'],
        },
        {
          text: 'Bundlers Reference',
          collapsible: false,
          children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
        },
      ],
    },
  }),

  plugins: [
    
  ],
  
})