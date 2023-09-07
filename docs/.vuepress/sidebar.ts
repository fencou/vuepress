import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/hbdd/": [
    {
      text: "文档说明",
      icon: "tags",
      link: "/hbdd/",
    },
    {
      text: "教程正文",
      icon: "book",
      prefix: "",
      children: ['az.md','cz.md','ff.md','hh.md','faq.md'],
    },
  ],
  "/syt/": [
    {
      text: "文档说明",
      icon: "tags",
      link: "/syt/",
    },
    {
      text: "软件安装",
      icon: "cloud-arrow-down",
      link: "az.md",
    },
    {
      text: "客服销售快捷工具",
      icon: "stopwatch",
      link: "kjgj.md",
    },
    {
      text: "功能插件",
      icon: "wrench",
      children: [
        {
          text: "私域管理",
          icon: "users-gear",
          collapsible: true,
          prefix: "app_sygl/",
          children: "structure",
        },
        {
          text: "私域上粉",
          icon: "users-rays",
          collapsible: true,
          prefix: "app_sysf/",
          children: "structure",
        },
        {
          text: "消息推送",
          icon: "paper-plane",
          collapsible: true,
          prefix: "app_xxts/",
          children: "structure",
        },
        {
          text: "积分运营",
          icon: "database",
          collapsible: true,
          prefix: "app_jfyy/",
          children: "structure",
        },
      ]
    },
    {
      text: "设置",
      icon: "gear",
      link: "setting.md",
    },
      
  ],
  
});
