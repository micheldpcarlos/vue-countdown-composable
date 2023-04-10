import { defineConfig } from "vitepress";
import { withBase } from "vitepress";

export default defineConfig({
  title: "Vue Countdown",
  description: "Easy to use Vue 3 countdown composables",
  lang: "en-US",
  base: "/vue-countdown-composable/",
  ignoreDeadLinks: true,
  themeConfig: {
    logo: "/icon.svg",

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-PRESENT Michel Carlos",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/micheldpcarlos/vue-countdown-composables",
      },
    ],

    nav: [{ text: "Get Started", link: "/guide" }],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/" },
          { text: "useDateCountdown", link: "/guide/use-date-countdown/" },
          { text: "useNumberCountdown", link: "/guide/use-number-countdown/" },
        ],
      },
    ],
  },
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    // TODO: Check the possibility to make it dynamic
    [
      "link",
      {
        rel: "icon",
        href: "../vue-countdown-composable/favicon.ico",
        type: "image/x-icon",
      },
    ],
    ["meta", { name: "author", content: "Michel Carlos" }],
    ["meta", { property: "og:title", content: "Vue Countdown Composables" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Easy to use Vue 3 countdown composables",
      },
    ],
  ],
});
