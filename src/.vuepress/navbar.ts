import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "文渊阁",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "D:\紫水晶库\紫水晶库\pico练习",
        children: [
          { text: "picoCTF—Web", icon: "pen-to-square", link: "picoCTF—Web" },
          { text: "picoCTF—密码学", icon: "pen-to-square", link: "picoCTF—密码学" },
          { text: "picoCTF—取证", icon: "pen-to-square", link: "picoCTF—取证" },
          { text: "picoCTF—逆向", icon: "pen-to-square", link: "picoCTF—逆向" },
        ],
      },
      {
        text: "SQL",
        icon: "pen-to-square",
        prefix: "D:\紫水晶库\紫水晶库\SQL",
        children: [
          {
            text: "简介",
            icon: "pen-to-square",
            link: "简介",
          },
        ],
      },
      {
        text: "杂项",
        icon: "pen-to-square",
        prefix: "D:\紫水晶库\紫水晶库\杂项",
        children: [
          {
            text: "简介",
            icon: "pen-to-square",
            link: "简介",
          },
        ],
      },
    ],
  },
  {
    text: "GitHub",
    icon: "book",
    link: "https://github.com/ice-010",
  },
]);
