import { createI18n } from 'vue-i18n'
import de from '@/locales/de.json'
import en from '@/locales/en.json'
import it from '@/locales/it.json'
import zhCN from '@/locales/zh-CN.json'
import zhTW from '@/locales/zh-TW.json'

export const locales: {[key: string]: [string, Record<string, any>]} = {
  'de': ['Deutsch', de],
  'en': ['English', en],
  'it': ['Italiano', it],
  'zh-CN': ['简体中文', zhCN],
  'zh-TW': ['繁體中文', zhTW],
};

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

const availableLocales = Object.keys(locales);
const bestMatchingLocale = getBestMatchingLocale(getBrowserLocale(), availableLocales);

export default createI18n({
  legacy: false,
  locale: bestMatchingLocale,
  fallbackLocale: 'en',
  messages: Object.fromEntries(
    Object.entries(locales).map(([key, [, value]]) => [key, value])
  ),
})
