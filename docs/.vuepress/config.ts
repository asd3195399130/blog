import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'JavaScript 课程大纲',
  description: '大纲涵盖二段三段四段60天课程',
  head: [['link', { rel: 'icon', type: "x-icon", href: '/images/ikun.ico' }]],
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],

  plugins: [
    backToTopPlugin(),
  ],
  theme: defaultTheme({
    home: '/index.md',
    colorModeSwitch: true,
    // 默认主题配置
    navbar: [
      {
        text: '课程大纲',
        children: [
          {
            text: '一段课程',
            link: '/guide/一段.md',
          },
          {
            text: '二段课程',
            link: '/guide/二段.md',
          }, {
            text: '三段课程',
            link: '/guide/三段.md',
          },
          {
            text: '四段课程',
            link: '/guide/四段.md',
          }, {
            text: '五段课程',
            link: '/guide/五段/目录.md',
          },
          {
            text: '六段课程',
            link: '/guide/六段.md',
          },
          {
            text: '毕业课程',
            link: '/guide/毕业段.md',
          },
        ],
        activeMatch: '/'
      },
      {
        text: 'Tools',
        link: '/guide/tools.md',
      },
    ],

  })
})
