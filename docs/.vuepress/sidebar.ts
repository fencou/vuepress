import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/hbdd/": [
    {
      text: "红包多多文档",
      icon: "book",
      children: ['/hbdd/','/hbdd/az.md','/hbdd/cz.md','/hbdd/ff.md','/hbdd/hh.md','/hbdd/faq.md','/hbdd/upfaq.md'],
    },
  ],
  "/faqun/": [
    {
      text: "发群私域通文档",
      icon: "book",
      children: [],
    },
  ],
  
});
