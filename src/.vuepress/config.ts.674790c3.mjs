// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { resolve } from "path";
import fs from "fs";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  "/catalog",
  {
    text: "WEB\u9879\u76EE",
    icon: "laptop-code",
    children: [
      {
        text: "LTPP-\u5728\u7EBF\u5F00\u53D1\u5E73\u53F0",
        icon: "laptop-code",
        children: [
          { text: "\u6253\u5F00", icon: "laptop-code", link: "https://ltpp.vip" }
        ]
      },
      {
        text: "LTPP-GITLAB",
        icon: "laptop-code",
        children: [
          { text: "\u6253\u5F00", icon: "laptop-code", link: "https://git.ltpp.vip" }
        ]
      },
      {
        text: "LTPP-WEB-IDE",
        icon: "laptop-code",
        children: [
          {
            text: "C",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=c"
          },
          {
            text: "C++",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=cpp"
          },
          {
            text: "JavaScript",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=javascript"
          },
          {
            text: "TypeScript",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=typescript"
          },
          {
            text: "Rust",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=rust"
          },
          {
            text: "Golang",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=golang"
          },
          {
            text: "PHP",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=php"
          },
          {
            text: "Ruby",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=ruby"
          },
          {
            text: "Python3",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=py"
          },
          {
            text: "Java",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=java"
          },
          {
            text: "C#",
            icon: "laptop-code",
            link: "https://ide.ltpp.vip/?language=csharp"
          }
        ]
      },
      {
        text: "QRCODE",
        icon: "laptop-code",
        children: [
          {
            text: "\u6253\u5F00",
            icon: "laptop-code",
            link: "https://qrcode.ltpp.vip"
          }
        ]
      }
    ]
  },
  "/appreciate"
]);

// src/.vuepress/sidebar.js
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/bin-encode-decode": "structure",
  "/china-identification-card": "structure",
  "/chunkify": "structure",
  "/clonelicious": "structure",
  "/cloud-file-storage": "structure",
  "/color-output": "structure",
  "/compare-version": "structure",
  "/development-standards": "structure",
  "/file-operation": "structure",
  "/future-fn": "structure",
  "/gtl": "structure",
  "/http-compress": "structure",
  "/http-constant": "structure",
  "/http-request": "structure",
  "/http-type": "structure",
  "/hyperlane": "structure",
  "/hyperlane-log": "structure",
  "/hyperlane-time": "structure",
  "/lombok-macros": "structure",
  "/ltpp": "structure",
  "/ltpp-code-run": "structure",
  "/ltpp-event-publish-subscribe-in-javascript": "structure",
  "/ltpp-gitlab": "structure",
  "/ltpp-html-pdf": "structure",
  "/ltpp-leetcode-and-acwing-rank": "structure",
  "/ltpp-oj-judge-testdata-creat": "structure",
  "/ltpp-post-blog-user-crawler": "structure",
  "/ltpp-qrcode": "structure",
  "/ltpp-rust-get-proxy-request": "structure",
  "/ltpp-rust-web-server": "structure",
  "/ltpp-share": "structure",
  "/ltpp-sqs-douyin-collection-download": "structure",
  "/ltpp-ssh": "structure",
  "/ltpp-web-ide": "structure",
  "/recoverable-spawn": "structure",
  "/recoverable-thread-pool": "structure",
  "/server-manager": "structure",
  "/std-macro-extensions": "structure",
  "/tcp-request": "structure",
  "/tcplane": "structure",
  "/udp": "structure",
  "/udp-request": "structure"
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://docs.ltpp.vip",
  author: {
    name: "eastspire",
    url: "https://github.com/eastspire"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/img/logo.png",
  repo: "https://github.com/eastspire",
  docsDir: "src",
  repoDisplay: true,
  print: true,
  // 导航栏
  navbar: navbar_default,
  // 侧边栏
  sidebar: sidebar_default,
  displayFooter: true,
  editLink: false,
  copyright: '<a target="_blank" class="ltpp-link animate" href="mailto:root@ltpp.vip">\xA9 2021 - present eastspire \u7248\u6743\u6240\u6709</a>',
  // 多语言配置
  metaLocales: {
    editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
  },
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,
  darkmode: "toggle",
  fullscreen: false,
  // 在这里配置主题提供的插件
  plugins: {
    copyright: true,
    activeHeaderLinks: true,
    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "XiGua"
      ]
    },
    // 搜索框
    search: {
      maxSuggestions: 100
    },
    copyCode: {
      showInMobile: true
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      alert: true,
      align: true,
      mermaid: true,
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
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      playground: {
        presets: ["ts", "vue"]
      }
    }
  }
});

// src/.vuepress/config.ts
var __vite_injected_original_dirname = "D:/code/ltpp-docs/src/.vuepress";
var is_ltpp_pages = process.env.LTPP === "LTPP";
var is_dev = process.env.NODE_ENV === "development";
var base = is_dev ? "/" : is_ltpp_pages ? "/ltpp-docs/" : "/";
console.log(`${is_dev ? "\u5F00\u53D1" : "\u751F\u4EA7"}\u73AF\u5883`);
!is_dev && console.log(`${is_ltpp_pages ? "LTPP-GIT" : "GITHUB"}\u6D41\u6C34\u7EBF`);
var config_default = defineUserConfig({
  base,
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  title: "LTPP-UNIVERSE\u6587\u6863",
  description: "LTPP-UNIVERSE\u6587\u6863",
  theme: theme_default,
  dest: resolve(__vite_injected_original_dirname, "../../docs-html"),
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "LTPP,\u5F00\u53D1,\u7F16\u7A0B,\u8BA1\u7B97\u673A,\u5B66\u4E60,\u8D44\u6E90,OJ,LTPP-\u5728\u7EBF\u5F00\u53D1\u5E73\u53F0,LTPP-UNIVERSE,LTPP-UNIVERSE\u6587\u6863,Rust,\u535A\u5BA2,\u6587\u5B57,\u6587\u7AE0,\u7CBE\u9009"
      }
    ],
    [
      "meta",
      {
        name: "description",
        content: "LTPP-UNIVERSE\u6587\u6863"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: `${base}img/logo.png`
      }
    ],
    [
      "script",
      {},
      `
      ${fs.readFileSync(resolve(__vite_injected_original_dirname, "./head.js"))}
    `
    ]
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9jb2RlL2x0cHAtZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGx0cHAtZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9sdHBwLWRvY3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lLmpzJztcbmNvbnN0IGlzX2x0cHBfcGFnZXMgPSBwcm9jZXNzLmVudi5MVFBQID09PSAnTFRQUCc7XG5jb25zdCBpc19kZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcbmNvbnN0IGJhc2UgPSBpc19kZXYgPyAnLycgOiBpc19sdHBwX3BhZ2VzID8gJy9sdHBwLWRvY3MvJyA6ICcvJztcblxuY29uc29sZS5sb2coYCR7aXNfZGV2ID8gJ1x1NUYwMFx1NTNEMScgOiAnXHU3NTFGXHU0RUE3J31cdTczQUZcdTU4ODNgKTtcblxuIWlzX2RldiAmJiBjb25zb2xlLmxvZyhgJHtpc19sdHBwX3BhZ2VzID8gJ0xUUFAtR0lUJyA6ICdHSVRIVUInfVx1NkQ0MVx1NkMzNFx1N0VCRmApO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogYmFzZSxcbiAgbG9jYWxlczoge1xuICAgICcvJzoge1xuICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICB9LFxuICB9LFxuICB0aXRsZTogJ0xUUFAtVU5JVkVSU0VcdTY1ODdcdTY4NjMnLFxuICBkZXNjcmlwdGlvbjogJ0xUUFAtVU5JVkVSU0VcdTY1ODdcdTY4NjMnLFxuICB0aGVtZSxcbiAgZGVzdDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9kb2NzLWh0bWwnKSxcbiAgaGVhZDogW1xuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3ZpZXdwb3J0JyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8nLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3ZpZXdwb3J0JyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8nLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICAnTFRQUCxcdTVGMDBcdTUzRDEsXHU3RjE2XHU3QTBCLFx1OEJBMVx1N0I5N1x1NjczQSxcdTVCNjZcdTRFNjAsXHU4RDQ0XHU2RTkwLE9KLExUUFAtXHU1NzI4XHU3RUJGXHU1RjAwXHU1M0QxXHU1RTczXHU1M0YwLExUUFAtVU5JVkVSU0UsTFRQUC1VTklWRVJTRVx1NjU4N1x1Njg2MyxSdXN0LFx1NTM1QVx1NUJBMixcdTY1ODdcdTVCNTcsXHU2NTg3XHU3QUUwLFx1N0NCRVx1OTAwOScsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgJ21ldGEnLFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICBjb250ZW50OiAnTFRQUC1VTklWRVJTRVx1NjU4N1x1Njg2MycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdpY29uJyxcbiAgICAgICAgaHJlZjogYCR7YmFzZX1pbWcvbG9nby5wbmdgLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICdzY3JpcHQnLFxuICAgICAge30sXG4gICAgICBgXG4gICAgICAke2ZzLnJlYWRGaWxlU3luYyhyZXNvbHZlKF9fZGlybmFtZSwgJy4vaGVhZC5qcycpKX1cbiAgICBgLFxuICAgIF0sXG4gIF0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovY29kZS9sdHBwLWRvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxsdHBwLWRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9sdHBwLWRvY3Mvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLWhvcGUnO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhci5qcyc7XG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXIuanMnO1xuaW1wb3J0IHsgbWRFbmhhbmNlUGx1Z2luIH0gZnJvbSAnbWVybWFpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiAnaHR0cHM6Ly9kb2NzLmx0cHAudmlwJyxcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiAnbHRwcC11bml2ZXJzZScsXG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2x0cHAtdW5pdmVyc2UnLFxuICB9LFxuXG4gIGljb25Bc3NldHM6ICdmb250YXdlc29tZS13aXRoLWJyYW5kcycsXG5cbiAgbG9nbzogJy9pbWcvbG9nby5wbmcnLFxuXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbHRwcC11bml2ZXJzZScsXG5cbiAgZG9jc0RpcjogJ3NyYycsXG5cbiAgcmVwb0Rpc3BsYXk6IHRydWUsXG5cbiAgcHJpbnQ6IHRydWUsXG5cbiAgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXG4gIG5hdmJhcixcblxuICAvLyBcdTRGQTdcdThGQjlcdTY4MEZcbiAgc2lkZWJhcixcblxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIGVkaXRMaW5rOiBmYWxzZSxcblxuICBjb3B5cmlnaHQ6XG4gICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibHRwcC1saW5rIGFuaW1hdGVcIiBocmVmPVwibWFpbHRvOnJvb3RAbHRwcC52aXBcIj5cdTAwQTkgMjAyMSAtIHByZXNlbnQgbHRwcC11bml2ZXJzZSBcdTcyNDhcdTY3NDNcdTYyNDBcdTY3MDk8L2E+JyxcblxuICAvLyBcdTU5MUFcdThCRURcdThBMDBcdTkxNERcdTdGNkVcbiAgbWV0YUxvY2FsZXM6IHtcbiAgICBlZGl0TGluazogJ1x1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1JyxcbiAgfSxcblxuICAvLyBcdTU5ODJcdTY3OUNcdTYwRjNcdTg5ODFcdTVCOUVcdTY1RjZcdTY3RTVcdTc3MEJcdTRFRkJcdTRGNTVcdTY1MzlcdTUzRDhcdUZGMENcdTU0MkZcdTc1MjhcdTVCODNcdTMwMDJcdTZDRTg6IFx1OEZEOVx1NUJGOVx1NjZGNFx1NjVCMFx1NjAyN1x1ODBGRFx1NjcwOVx1NUY4OFx1NTkyN1x1OEQxRlx1OTc2Mlx1NUY3MVx1NTRDRFxuICBob3RSZWxvYWQ6IHRydWUsXG5cbiAgZGFya21vZGU6ICd0b2dnbGUnLFxuXG4gIGZ1bGxzY3JlZW46IGZhbHNlLFxuXG4gIC8vIFx1NTcyOFx1OEZEOVx1OTFDQ1x1OTE0RFx1N0Y2RVx1NEUzQlx1OTg5OFx1NjNEMFx1NEY5Qlx1NzY4NFx1NjNEMlx1NEVGNlxuICBwbHVnaW5zOiB7XG4gICAgY29weXJpZ2h0OiB0cnVlLFxuICAgIGFjdGl2ZUhlYWRlckxpbmtzOiB0cnVlLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgJ0FydFBsYXllcicsXG4gICAgICAgICdCYWRnZScsXG4gICAgICAgICdDb2RlUGVuJyxcbiAgICAgICAgJ1BERicsXG4gICAgICAgICdTaGFyZScsXG4gICAgICAgICdTaXRlSW5mbycsXG4gICAgICAgICdTdGFja0JsaXR6JyxcbiAgICAgICAgJ1ZQQmFubmVyJyxcbiAgICAgICAgJ1ZQQ2FyZCcsXG4gICAgICAgICdWaWRTdGFjaycsXG4gICAgICAgICdYaUd1YScsXG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8gXHU2NDFDXHU3RDIyXHU2ODQ2XG4gICAgc2VhcmNoOiB7XG4gICAgICBtYXhTdWdnZXN0aW9uczogMTAwLFxuICAgIH0sXG4gICAgY29weUNvZGU6IHtcbiAgICAgIHNob3dJbk1vYmlsZTogdHJ1ZSxcbiAgICB9LFxuICAgIC8vIFx1NkI2NFx1NTkwNFx1NUYwMFx1NTQyRlx1NEU4Nlx1NUY4OFx1NTkxQVx1NTI5Rlx1ODBGRFx1NzUyOFx1NEU4RVx1NkYxNFx1NzkzQVx1RkYwQ1x1NEY2MFx1NUU5NFx1NEVDNVx1NEZERFx1NzU1OVx1NzUyOFx1NTIzMFx1NzY4NFx1NTI5Rlx1ODBGRFx1MzAwMlxuICAgIG1kRW5oYW5jZToge1xuICAgICAgYWxlcnQ6IHRydWUsXG4gICAgICBhbGlnbjogdHJ1ZSxcbiAgICAgIG1lcm1haWQ6IHRydWUsXG4gICAgICBhdHRyczogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50OiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogJ1JlY29tbWVuZGVkJyxcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09ICdlbScpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnQmFkZ2UnLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6ICd0aXAnIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1JlY29tbWVuZGVkJyxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB0YXNrbGlzdDogdHJ1ZSxcbiAgICAgIHZQcmU6IHRydWUsXG4gICAgICBwbGF5Z3JvdW5kOiB7XG4gICAgICAgIHByZXNldHM6IFsndHMnLCAndnVlJ10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovY29kZS9sdHBwLWRvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxsdHBwLWRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvbHRwcC1kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtaG9wZSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gICcvJyxcbiAgJy9jYXRhbG9nJyxcbiAge1xuICAgIHRleHQ6ICdXRUJcdTk4NzlcdTc2RUUnLFxuICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0xUUFAtXHU1NzI4XHU3RUJGXHU1RjAwXHU1M0QxXHU1RTczXHU1M0YwJyxcbiAgICAgICAgaWNvbjogJ2xhcHRvcC1jb2RlJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6ICdcdTYyNTNcdTVGMDAnLCBpY29uOiAnbGFwdG9wLWNvZGUnLCBsaW5rOiAnaHR0cHM6Ly9sdHBwLnZpcCcgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdMVFBQLUdJVExBQicsXG4gICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2MjUzXHU1RjAwJywgaWNvbjogJ2xhcHRvcC1jb2RlJywgbGluazogJ2h0dHBzOi8vZ2l0Lmx0cHAudmlwJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0xUUFAtV0VCLUlERScsXG4gICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0MnLFxuICAgICAgICAgICAgaWNvbjogJ2xhcHRvcC1jb2RlJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2lkZS5sdHBwLnZpcC8/bGFuZ3VhZ2U9YycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQysrJyxcbiAgICAgICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9pZGUubHRwcC52aXAvP2xhbmd1YWdlPWNwcCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnSmF2YVNjcmlwdCcsXG4gICAgICAgICAgICBpY29uOiAnbGFwdG9wLWNvZGUnLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vaWRlLmx0cHAudmlwLz9sYW5ndWFnZT1qYXZhc2NyaXB0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9pZGUubHRwcC52aXAvP2xhbmd1YWdlPXR5cGVzY3JpcHQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1J1c3QnLFxuICAgICAgICAgICAgaWNvbjogJ2xhcHRvcC1jb2RlJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2lkZS5sdHBwLnZpcC8/bGFuZ3VhZ2U9cnVzdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnR29sYW5nJyxcbiAgICAgICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9pZGUubHRwcC52aXAvP2xhbmd1YWdlPWdvbGFuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnUEhQJyxcbiAgICAgICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9pZGUubHRwcC52aXAvP2xhbmd1YWdlPXBocCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnUnVieScsXG4gICAgICAgICAgICBpY29uOiAnbGFwdG9wLWNvZGUnLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vaWRlLmx0cHAudmlwLz9sYW5ndWFnZT1ydWJ5JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdQeXRob24zJyxcbiAgICAgICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9pZGUubHRwcC52aXAvP2xhbmd1YWdlPXB5JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdKYXZhJyxcbiAgICAgICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9pZGUubHRwcC52aXAvP2xhbmd1YWdlPWphdmEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0MjJyxcbiAgICAgICAgICAgIGljb246ICdsYXB0b3AtY29kZScsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9pZGUubHRwcC52aXAvP2xhbmd1YWdlPWNzaGFycCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdRUkNPREUnLFxuICAgICAgICBpY29uOiAnbGFwdG9wLWNvZGUnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTYyNTNcdTVGMDAnLFxuICAgICAgICAgICAgaWNvbjogJ2xhcHRvcC1jb2RlJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL3FyY29kZS5sdHBwLnZpcCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgJy9hcHByZWNpYXRlJyxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9jb2RlL2x0cHAtZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGx0cHAtZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvbHRwcC1kb2NzL3NyYy8udnVlcHJlc3Mvc2lkZWJhci5qc1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyKHtcbiAgXCIvYmluLWVuY29kZS1kZWNvZGVcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2NoaW5hLWlkZW50aWZpY2F0aW9uLWNhcmRcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2NodW5raWZ5XCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9jbG9uZWxpY2lvdXNcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2Nsb3VkLWZpbGUtc3RvcmFnZVwiOiAnc3RydWN0dXJlJyxcbiAgXCIvY29sb3Itb3V0cHV0XCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9jb21wYXJlLXZlcnNpb25cIjogJ3N0cnVjdHVyZScsXG4gIFwiL2RldmVsb3BtZW50LXN0YW5kYXJkc1wiOiAnc3RydWN0dXJlJyxcbiAgXCIvZmlsZS1vcGVyYXRpb25cIjogJ3N0cnVjdHVyZScsXG4gIFwiL2Z1dHVyZS1mblwiOiAnc3RydWN0dXJlJyxcbiAgXCIvZ3RsXCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9odHRwLWNvbXByZXNzXCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9odHRwLWNvbnN0YW50XCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9odHRwLXJlcXVlc3RcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2h0dHAtdHlwZVwiOiAnc3RydWN0dXJlJyxcbiAgXCIvaHlwZXJsYW5lXCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9oeXBlcmxhbmUtbG9nXCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9oeXBlcmxhbmUtdGltZVwiOiAnc3RydWN0dXJlJyxcbiAgXCIvbG9tYm9rLW1hY3Jvc1wiOiAnc3RydWN0dXJlJyxcbiAgXCIvbHRwcFwiOiAnc3RydWN0dXJlJyxcbiAgXCIvbHRwcC1jb2RlLXJ1blwiOiAnc3RydWN0dXJlJyxcbiAgXCIvbHRwcC1ldmVudC1wdWJsaXNoLXN1YnNjcmliZS1pbi1qYXZhc2NyaXB0XCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9sdHBwLWdpdGxhYlwiOiAnc3RydWN0dXJlJyxcbiAgXCIvbHRwcC1odG1sLXBkZlwiOiAnc3RydWN0dXJlJyxcbiAgXCIvbHRwcC1sZWV0Y29kZS1hbmQtYWN3aW5nLXJhbmtcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2x0cHAtb2otanVkZ2UtdGVzdGRhdGEtY3JlYXRcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2x0cHAtcG9zdC1ibG9nLXVzZXItY3Jhd2xlclwiOiAnc3RydWN0dXJlJyxcbiAgXCIvbHRwcC1xcmNvZGVcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2x0cHAtcnVzdC1nZXQtcHJveHktcmVxdWVzdFwiOiAnc3RydWN0dXJlJyxcbiAgXCIvbHRwcC1ydXN0LXdlYi1zZXJ2ZXJcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2x0cHAtc2hhcmVcIjogJ3N0cnVjdHVyZScsXG4gIFwiL2x0cHAtc3FzLWRvdXlpbi1jb2xsZWN0aW9uLWRvd25sb2FkXCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9sdHBwLXNzaFwiOiAnc3RydWN0dXJlJyxcbiAgXCIvbHRwcC13ZWItaWRlXCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9yZWNvdmVyYWJsZS1zcGF3blwiOiAnc3RydWN0dXJlJyxcbiAgXCIvcmVjb3ZlcmFibGUtdGhyZWFkLXBvb2xcIjogJ3N0cnVjdHVyZScsXG4gIFwiL3NlcnZlci1tYW5hZ2VyXCI6ICdzdHJ1Y3R1cmUnLFxuICBcIi9zdGQtbWFjcm8tZXh0ZW5zaW9uc1wiOiAnc3RydWN0dXJlJyxcbiAgXCIvdGNwLXJlcXVlc3RcIjogJ3N0cnVjdHVyZScsXG4gIFwiL3RjcGxhbmVcIjogJ3N0cnVjdHVyZScsXG4gIFwiL3VkcFwiOiAnc3RydWN0dXJlJyxcbiAgXCIvdWRwLXJlcXVlc3RcIjogJ3N0cnVjdHVyZScsXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQTJRLFNBQVMsd0JBQXdCO0FBQzVTLFNBQVMsZUFBZTtBQUN4QixPQUFPLFFBQVE7OztBQ0YwUCxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUVsUyxJQUFPLGlCQUFRLE9BQU87QUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLGdCQUFNLE1BQU0sZUFBZSxNQUFNLG1CQUFtQjtBQUFBLFFBQzlEO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxnQkFBTSxNQUFNLGVBQWUsTUFBTSx1QkFBdUI7QUFBQSxRQUNsRTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07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
