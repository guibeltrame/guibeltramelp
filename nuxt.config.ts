import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
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
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon", "@nuxtjs/robots"],
});
