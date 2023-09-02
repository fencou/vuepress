import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档中心",
  description: "faqun.cn的产品文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
