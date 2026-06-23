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
          href: "https://scripts.converteai.net/317ca4a5-62ee-4eb2-8032-cd11077af201/players/6a39acd98136b4416dd4f9bb/v4/player.js",
          as: "script",
        },
        {
          rel: "preload",
          href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
          as: "script",
        },
        {
          rel: "preload",
          href: "https://cdn.converteai.net/317ca4a5-62ee-4eb2-8032-cd11077af201/6a39ac611fa755ae788e49cd/main.m3u8",
          as: "fetch",
        },
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
