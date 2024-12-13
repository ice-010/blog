import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "鸿文",
      icon: "book",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "华章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "影卷",
      icon: "person-chalkboard",
      link: "C:\Users\ASUS\Desktop\picoCTF密码知识点.pptx",
    },
  ],
});
