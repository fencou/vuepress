export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"官网\",\"link\":\"http://www.faqun.cn\"},{\"text\":\"产品\",\"children\":[\"/faqun/\",\"/hbdd/\"]},\"/bar/README.md\"],\"sidebar\":{\"/guide/\":[{\"text\":\"Foo\",\"link\":\"/foo/\",\"children\":[{\"text\":\"github\",\"link\":\"https://github.com\",\"children\":[]},\"/foo/bar.md\"]},\"/bar/README.md\"],\"/faqun/\":[{\"text\":\"Guide\",\"children\":[\"/guide/README.md\",\"/guide/getting-started.md\"]}],\"/hbdd/\":[{\"text\":\"VuePress Reference\",\"collapsible\":true,\"children\":[\"/reference/cli.md\",\"/reference/config.md\"]},{\"text\":\"Bundlers Reference\",\"collapsible\":false,\"children\":[\"/reference/bundler/vite.md\",\"/reference/bundler/webpack.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
