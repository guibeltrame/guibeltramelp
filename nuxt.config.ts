import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
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

  modules: ["@nuxt/icon", "@nuxtjs/robots", "@nuxtjs/i18n"],

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "pt-BR",
    locales: [
      {
        code: "pt-BR",
        language: "pt-BR",
        name: "Português",
        file: "pt-BR.json",
      },
      {
        code: "en-US",
        language: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "es-ES",
        language: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      cookieSecure: true,
      cookieCrossOrigin: false,
      redirectOn: "root",
      fallbackLocale: "pt-BR",
      alwaysRedirect: false,
    },
    baseUrl: "https://exemplo.com.br",
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
});
