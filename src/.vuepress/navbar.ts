import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  '/catalog',
  {
    text: 'WEB项目',
    icon: 'laptop-code',
    children: [
      {
        text: 'LTPP-在线开发平台',
        icon: 'laptop-code',
        children: [
          { text: '打开', icon: 'laptop-code', link: 'https://ltpp.vip' },
        ],
      },
      {
        text: 'LTPP-GITLAB',
        icon: 'laptop-code',
        children: [
          { text: '打开', icon: 'laptop-code', link: 'https://git.ltpp.vip' },
        ],
      },
      {
        text: 'LTPP-WEB-IDE',
        icon: 'laptop-code',
        children: [
          {
            text: 'C',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=c',
          },
          {
            text: 'C++',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=cpp',
          },
          {
            text: 'JavaScript',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=javascript',
          },
          {
            text: 'TypeScript',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=typescript',
          },
          {
            text: 'Rust',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=rust',
          },
          {
            text: 'Golang',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=golang',
          },
          {
            text: 'PHP',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=php',
          },
          {
            text: 'Ruby',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=ruby',
          },
          {
            text: 'Python3',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=py',
          },
          {
            text: 'Java',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=java',
          },
          {
            text: 'C#',
            icon: 'laptop-code',
            link: 'https://ide.ltpp.vip/?language=csharp',
          },
        ],
      },
      {
        text: 'QRCODE',
        icon: 'laptop-code',
        children: [
          {
            text: '打开',
            icon: 'laptop-code',
            link: 'https://qrcode.ltpp.vip',
          },
        ],
      },
    ],
  },
  '/appreciate',
]);
