export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$8EYNPdC.xNY3OVjxcSIBveDtP1HOVZ0EvT4NwOz81jhkL8N4Cvt0e\"]}},\"logo\":\"/logo.svg\",\"docsDir\":\"docs\",\"footer\":\"发群私域通版权所有\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"官网\",\"link\":\"https://www.faqun.cn\"},{\"text\":\"发群私域通文档\",\"icon\":\"book\",\"link\":\"/syt/\"},{\"text\":\"红包多多文档\",\"icon\":\"book\",\"link\":\"/hbdd/\"},{\"text\":\"杀毒处理\",\"link\":\"https://www.faqun.cn/archives/73\"},{\"text\":\"远程工具\",\"link\":\"https://www.faqun.cn/todesk\"}],\"sidebar\":{\"/hbdd/\":[{\"text\":\"文档说明\",\"icon\":\"tags\",\"link\":\"/hbdd/\"},{\"text\":\"教程正文\",\"icon\":\"book\",\"prefix\":\"\",\"children\":[\"az.md\",\"cz.md\",\"ff.md\",\"hh.md\",\"faq.md\"]}],\"/syt/\":[{\"text\":\"文档说明\",\"icon\":\"tags\",\"link\":\"/syt/\"},{\"text\":\"软件安装\",\"icon\":\"cloud-arrow-down\",\"link\":\"az.md\"},{\"text\":\"客服销售快捷工具\",\"icon\":\"stopwatch\",\"link\":\"kjgj.md\"},{\"text\":\"功能插件\",\"icon\":\"wrench\",\"children\":[{\"text\":\"私域管理\",\"icon\":\"users-gear\",\"collapsible\":true,\"prefix\":\"app_sygl/\",\"children\":\"structure\"},{\"text\":\"私域上粉\",\"icon\":\"users-rays\",\"collapsible\":true,\"prefix\":\"app_sysf/\",\"children\":\"structure\"},{\"text\":\"消息推送\",\"icon\":\"paper-plane\",\"collapsible\":true,\"prefix\":\"app_xxts/\",\"children\":\"structure\"},{\"text\":\"积分运营\",\"icon\":\"database\",\"collapsible\":true,\"prefix\":\"app_jfyy/\",\"children\":\"structure\"}]},{\"text\":\"设置\",\"icon\":\"gear\",\"link\":\"setting.md\"}]}}}}")

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
