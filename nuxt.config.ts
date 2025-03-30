// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
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
      news: false,
    },
    locales: [
      {
        code: "ar",
        language: "ar-AR",
        file: "ar.json",
        name: "العربية",
        dir: "rtl",
      },
      {
        code: "bn",
        language: "bn-BD",
        file: "bn.json",
        name: "বাংলা",
      },
      {
        code: "ca",
        language: "ca-ES",
        file: "ca.json",
        name: "Català",
      },
      {
        code: "cs",
        language: "cs-CZ",
        file: "cs.json",
        name: "Čeština",
      },
      {
        code: "de",
        language: "de-DE",
        file: "de.json",
        name: "Deutsch",
      },
      {
        code: "el",
        language: "el-GR",
        file: "el.json",
        name: "Ελληνικά",
      },
      {
        code: "en",
        language: "en-US",
        file: "en.json",
        name: "English",
        isCatchallLocale: true,
      },
      {
        code: "es",
        language: "es-ES",
        file: "es.json",
        name: "Español",
      },
      {
        code: "fa",
        language: "fa-IR",
        file: "fa.json",
        name: "فارسی",
        dir: "rtl",
      },
      {
        code: "fil",
        language: "fil-PH",
        file: "fil.json",
        name: "Filipino",
      },
      {
        code: "fr",
        language: "fr-FR",
        file: "fr.json",
        name: "Français",
      },
      {
        code: "gl",
        language: "gl-ES",
        file: "gl.json",
        name: "Galego",
      },
      {
        code: "he",
        language: "he-IL",
        file: "he.json",
        name: "עברית",
        dir: "rtl",
      },
      {
        code: "hi",
        language: "hi-IN",
        file: "hi.json",
        name: "हिन्दी",
      },
      {
        code: "id",
        language: "id-ID",
        file: "id.json",
        name: "Bahasa Indonesia",
      },
      {
        code: "it",
        language: "it-IT",
        file: "it.json",
        name: "Italiano",
      },
      {
        code: "ja",
        language: "ja-JP",
        file: "ja.json",
        name: "日本語",
      },
      {
        code: "ka",
        language: "ka-IN",
        file: "ka.json",
        name: "ಕನ್ನಡ",
      },
      {
        code: "km",
        language: "km-KH",
        file: "km.json",
        name: "ភាសាខ្មែរ",
      },
      {
        code: "ko",
        language: "ko-KR",
        file: "ko.json",
        name: "한국어",
      },
      {
        code: "mal-IN",
        language: "mal-IN",
        file: "mal-IN.json",
        name: "മലയാളം",
      },
      {
        code: "mr",
        language: "mr-IN",
        file: "mr.json",
        name: "मराठी",
      },
      {
        code: "nl",
        language: "nl-NL",
        file: "nl.json",
        name: "Nederlands",
      },
      {
        code: "oc",
        language: "oc-FR",
        file: "oc.json",
        name: "Occitan",
      },
      {
        code: "pl",
        language: "pl-PL",
        file: "pl.json",
        name: "Polski",
      },
      {
        code: "pt-BR",
        language: "pt-BR",
        file: "pt-BR.json",
        name: "Português (Brasil)",
      },
      {
        code: "pt-PT",
        language: "pt-PT",
        file: "pt-PT.json",
        name: "Português (Portugal)",
      },
      {
        code: "ru",
        language: "ru-RU",
        file: "ru.json",
        name: "Русский",
      },
      {
        code: "sk",
        language: "sk-SK",
        file: "sk.json",
        name: "Slovenčina",
      },
      {
        code: "sr",
        language: "sr-RS",
        file: "sr.json",
        name: "Srpski (latinica)",
      },
      {
        code: "sr-Cyrl",
        language: "sr-RS",
        file: "sr-Cyrl.json",
        name: "Српски (ћирилица)",
      },
      {
        code: "sv",
        language: "sv-SE",
        file: "sv.json",
        name: "Svenska",
      },
      {
        code: "ta",
        language: "ta-IN",
        file: "ta.json",
        name: "தமிழ்",
      },
      {
        code: "te",
        language: "te-IN",
        file: "te.json",
        name: "తెలుగు",
      },
      {
        code: "th",
        language: "th-TH",
        file: "th.json",
        name: "ภาษาไทย",
      },
      {
        code: "tr",
        language: "tr-TR",
        file: "tr.json",
        name: "Türkçe",
      },
      {
        code: "ug",
        language: "ug-CN",
        file: "ug.json",
        name: "ئۇيغۇرچە",
        dir: "rtl",
      },
      {
        code: "uk",
        language: "uk-UA",
        file: "uk.json",
        name: "Українська",
      },
      {
        code: "vi",
        language: "vi-VN",
        file: "vi.json",
        name: "Tiếng Việt",
      },
      {
        code: "zh-CN",
        language: "zh-CN",
        file: "zh-CN.json",
        name: "简体中文",
      },
      {
        code: "zh-HK",
        language: "zh-HK",
        file: "zh-HK.json",
        name: "繁體中文 – 香港",
      },
      {
        code: "zh-TW",
        language: "zh-TW",
        file: "zh-TW.json",
        name: "繁體中文 – 台灣",
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
