// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icon', '@nuxtjs/sitemap'],
  devtools: {enabled: true},
  app: {
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
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    skipSettingLocaleOnNavigate: true, // https://i18n.nuxtjs.org/docs/guide/lang-switcher#wait-for-page-transition
    pages: {
      privacy: false,
      terms: false,
      imprint: false,
      contact: false,
    },
    locales: [
      {
        code: 'ar',
        iso: 'ar-AR'
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
        code: 'en',
        iso: 'en-US',
        isCatchallLocale: true
      },
      {
        code: 'es',
        iso: 'es-ES'
      },
      {
        code: 'fr',
        iso: 'fr-FR'
      },
      {
        code: 'he',
        iso: 'he-IL'
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
        code: 'km',
        iso: 'km-KH'
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
        code: 'th',
        iso: 'th-TH'
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