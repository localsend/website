import { createI18n } from 'vue-i18n'
import de from '@/locales/de.json'
import en from '@/locales/en.json'
import zhCN from '@/locales/zh-CN.json'
import zhTW from '@/locales/zh-TW.json'

function getBrowserLocale(): string {
  return navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language;
}

function getBestMatchingLocale(browserLocale: string, availableLocales: string[]): string {
  if (availableLocales.includes(browserLocale)) {
    return browserLocale;
  }

  const baseLocale = browserLocale.split('-')[0];
  const matchingLocale = availableLocales.find(
    (locale) => locale.split('-')[0] === baseLocale
  );

  return matchingLocale || 'en'; // Fallback to 'en' if no match is found
}

const messages = {
  'de': de,
  'en': en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
};

const availableLocales = Object.keys(messages);
const bestMatchingLocale = getBestMatchingLocale(getBrowserLocale(), availableLocales);

export default createI18n({
  legacy: false,
  locale: bestMatchingLocale,
  fallbackLocale: 'en',
  messages: messages,
})
