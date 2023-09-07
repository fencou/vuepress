import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档中心",
  description: "faqun.cn的产品文档",

  theme,

  plugins: [
    docsearchPlugin({
      appId: "0SMFZ0GLSR",
      apiKey: "4570f34060845706cfb5d8f09edec2db",
      indexName: "faqun",
      locales: {
        "/": {
          placeholder: '搜索',
          translations: {
            button: {
              buttonText: '搜索',
            },
            modal: {
              startScreen: {
                noRecentSearchesText: '无结果',
              },
              footer: {
                selectText: '选择',
                navigateText: '上下移动',
                closeText: '关闭',
              },
              noResultsScreen: {
                noResultsText: '没有找到',

              },
            },
          },
        },
      }
    }),
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
