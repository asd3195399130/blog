import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'JavaScript 课程大纲',
  description: '大纲涵盖二段三段四段60天课程',
  head: [['link', { rel: 'icon', type: "x-icon", href: '../images/favicon.ico' }]],
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
            link: '/index.md#一段课程',
          },
          {
            text: '二段课程',
            link: '/index.md#二段课程',
          }, {
            text: '三段课程',
            link: '/index.md#三段课程',
          },
          {
            text: '四段课程',
            link: '/index.md#四段课程',
          }, {
            text: '五段课程',
            link: '/index.md#五段课程',
          },
          {
            text: '六段课程',
            link: '/index.md#六段课程',
          },
          {
            text: '毕业课程',
            link: '/index.md#毕业课程',
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
