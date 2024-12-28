import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';
import sidebar from './sidebar.js';

export default hopeTheme({
  hostname: 'https://docs.ltpp.vip',

  fullscreen: true,
  author: {
    name: 'ltpp-universe',
    url: 'https://github.com/ltpp-universe',
  },

  iconAssets: 'fontawesome-with-brands',

  logo: '/img/logo.png',

  repo: 'https://github.com/ltpp-universe',

  docsDir: 'src',

  repoDisplay: true,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  displayFooter: true,

  editLink: false,

  copyright:
    '<a target="_blank" class="ltpp-link animate" href="http://wpa.qq.com/msgrd?v=3&uin=1491579574&site=qq&menu=yes"> © 2021 - present LTPP版权所有</a>',

  // 多语言配置
  metaLocales: {
    editLink: '在 GitHub 上编辑此页',
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    copyright: true,
    components: {
      components: [
        'ArtPlayer',
        'Badge',
        'CodePen',
        'PDF',
        'Share',
        'SiteInfo',
        'StackBlitz',
        'VPBanner',
        'VPCard',
        'VidStack',
        'XiGua',
      ],
    },
    // 搜索框
    search: {
      maxSuggestions: 10,
    },
    copyCode: {
      showInMobile: true,
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      alert: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      playground: {
        presets: ['ts', 'vue'],
      },
    },
  },
});
