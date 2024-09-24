// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icon', '@nuxtjs/sitemap'],
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      ],
    },
  },
  site: {
    url: 'https://localsend.org',
  },
  i18n: {
    baseUrl: 'https://localsend.org',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    pages: {
      privacy: false,
      terms: false,
      imprint: false,
      contact: false,
    },
    locales: [
      {
        code: 'ar',
        iso: 'ar-AR',
        dir: 'rtl'
      },
      {
        code: 'cs',
        iso: 'cs-CZ'
      },
      {
        code: 'de',
        iso: 'de-DE'
      },
      {
        code: 'el',
        iso: 'el-GR'
      },
      {
        code: 'en',
        iso: 'en-US',
        isCatchallLocale: true
      },
      {
        code: 'es',
        iso: 'es-ES'
      },
      {
        code: 'fil',
        iso: 'fil-PH',
      },
      {
        code: 'fr',
        iso: 'fr-FR'
      },
      {
        code: 'he',
        iso: 'he-IL',
        dir: 'rtl'
      },
      {
        code: 'hi',
        iso: 'hi-IN'
      },
      {
        code: 'id',
        iso: 'id-ID'
      },
      {
        code: 'it',
        iso: 'it-IT'
      },
      {
        code: 'ja',
        iso: 'ja-JP'
      },
      {
        code: 'ka',
        iso: 'ka-IN',
      },
      {
        code: 'km',
        iso: 'km-KH'
      },
      {
        code: 'ko',
        iso: 'ko-KR'
      },
      {
        code: 'mal-IN',
        iso: 'mal-IN',
      },
      {
        code: 'mr',
        iso: 'mr-IN'
      },
      {
        code: 'pl',
        iso: 'pl-PL'
      },
      {
        code: 'pt-BR',
        iso: 'pt-BR'
      },
      {
        code: 'pt-PT',
        iso: 'pt-PT'
      },
      {
        code: 'ru',
        iso: 'ru-RU'
      },
      {
        code: 'sr',
        iso: 'sr-RS'
      },
      {
        code: 'th',
        iso: 'th-TH'
      },
      {
        code: 'ta',
        iso: 'ta-IN'
      },
      {
        code: 'te',
        iso: 'te-IN'
      },
      {
        code: 'tr',
        iso: 'tr-TR'
      },
      {
        code: 'uk',
        iso: 'uk-UA'
      },
      {
        code: 'vi',
        iso: 'vi-VN'
      },
      {
        code: 'zh-CN',
        iso: 'zh-CN'
      },
      {
        code: 'zh-HK',
        iso: 'zh-HK'
      },
      {
        code: 'zh-TW',
        iso: 'zh-TW',
      },
    ],
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    }
  },
})
