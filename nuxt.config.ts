// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@nuxtjs/sitemap",
  ],

  devtools: { enabled: true },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },

  site: {
    url: "https://localsend.org",
  },

  i18n: {
    baseUrl: "https://localsend.org",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    pages: {
      privacy: false,
      terms: false,
      imprint: false,
      contact: false,
    },
    locales: [
      {
        code: "ar",
        language: "ar-AR",
        dir: "rtl",
      },
      {
        code: "bn",
        language: "bn-BD",
      },
      {
        code: "cs",
        language: "cs-CZ",
      },
      {
        code: "de",
        language: "de-DE",
      },
      {
        code: "el",
        language: "el-GR",
      },
      {
        code: "en",
        language: "en-US",
        isCatchallLocale: true,
      },
      {
        code: "es",
        language: "es-ES",
      },
      {
        code: "fa",
        language: "fa-IR",
        dir: "rtl",
      },
      {
        code: "fil",
        language: "fil-PH",
      },
      {
        code: "fr",
        language: "fr-FR",
      },
      {
        code: "he",
        language: "he-IL",
        dir: "rtl",
      },
      {
        code: "hi",
        language: "hi-IN",
      },
      {
        code: "id",
        language: "id-ID",
      },
      {
        code: "it",
        language: "it-IT",
      },
      {
        code: "ja",
        language: "ja-JP",
      },
      {
        code: "ka",
        language: "ka-IN",
      },
      {
        code: "km",
        language: "km-KH",
      },
      {
        code: "ko",
        language: "ko-KR",
      },
      {
        code: "mal-IN",
        language: "mal-IN",
      },
      {
        code: "mr",
        language: "mr-IN",
      },
      {
        code: "nl",
        language: "nl-NL",
      },
      {
        code: "pl",
        language: "pl-PL",
      },
      {
        code: "pt-BR",
        language: "pt-BR",
      },
      {
        code: "pt-PT",
        language: "pt-PT",
      },
      {
        code: "ru",
        language: "ru-RU",
      },
      {
        code: "sr",
        language: "sr-RS",
      },
      {
        code: "sk",
        language: "sk-SK",
      },
      {
        code: "th",
        language: "th-TH",
      },
      {
        code: "ta",
        language: "ta-IN",
      },
      {
        code: "te",
        language: "te-IN",
      },
      {
        code: "tr",
        language: "tr-TR",
      },
      {
        code: "uk",
        language: "uk-UA",
      },
      {
        code: "ug",
        language: "ug-CN",
        dir: "rtl",
      },
      {
        code: "vi",
        language: "vi-VN",
      },
      {
        code: "zh-CN",
        language: "zh-CN",
      },
      {
        code: "zh-HK",
        language: "zh-HK",
      },
      {
        code: "zh-TW",
        language: "zh-TW",
      },
      {
        code: "sv",
        language: "sv-SE",
      },
    ],
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  compatibilityDate: "2024-10-20",
});
