import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "ice-010",
  title: "冰de眼涙",
  description: "冰de眼涙",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
