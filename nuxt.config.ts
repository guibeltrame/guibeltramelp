import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      script: [
        {
          innerHTML:
            "!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);",
        },
      ],
      link: [
        {
          rel: "preload",
          href: "/fonts/inter-latin-400.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "",
        },
        {
          rel: "preload",
          href: "/fonts/inter-latin-700.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "",
        },
        {
          rel: "preload",
          href: "https://scripts.converteai.net/317ca4a5-62ee-4eb2-8032-cd11077af201/ab-test/6a43327340698aa96bc8532f/player.js",
          as: "script",
        },
        {
          rel: "preload",
          href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
          as: "script",
        },
        { rel: "dns-prefetch", href: "https://m3u8.vturb.net" },
        { rel: "dns-prefetch", href: "https://cdn.converteai.net" },
        { rel: "dns-prefetch", href: "https://scripts.converteai.net" },
        { rel: "dns-prefetch", href: "https://images.converteai.net" },
        { rel: "dns-prefetch", href: "https://license.vturb.com" },
      ],
      noscript: [
        {
          innerHTML:
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3566875966946377&ev=PageView&noscript=1" alt="" />',
          tagPosition: "bodyClose",
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon", "@nuxtjs/robots"],
});
