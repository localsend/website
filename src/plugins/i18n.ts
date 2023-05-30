import { createI18n } from 'vue-i18n'
import de from '@/locales/de.json'
import en from '@/locales/en.json'
import it from '@/locales/it.json'
import fr from '@/locales/fr.json'
import ptBR from '@/locales/pt-BR.json'
import zhCN from '@/locales/zh-CN.json'
import zhTW from '@/locales/zh-TW.json'
import zhHK from '@/locales/zh-HK.json'

export const locales: {[key: string]: [string, Record<string, any>]} = {
  'de': ['Deutsch', de],
  'en': ['English', en],
  'it': ['Italiano', it],
  'fr': ['Français', fr],
  'pt-BR': ['Português brasileiro', ptBR],
  'zh-CN': ['简体中文', zhCN],
  'zh-TW': ['繁體中文 – 台灣', zhTW],
  'zh-HK': ['繁體中文 – 香港', zhHK],
};

interface LocaleParts {
  language: string | undefined;
  extlang: string | undefined;
  script: string | undefined;
  region: string | undefined;
}

const languageToRegionMap: Record<string, string> = {
  zh: 'CN', // Default to simplified Chinese if only language is given
}
const extlangToRegionMap: Record<string, string> = {
  cmn: 'CN',
  yue: 'HK',
}
const scriptToRegionMap: Record<string, string> = {
  Hans: 'CN',
  Hant: 'TW',
}
const extlangToLanguageMap: Record<string, string> = {};
// https://iso639-3.sil.org/code/zho
for (const extlang of 'zho cdo cjy cmn cpx czh czo gan hak hsn lzh mnp nan wuu yue cnp csp'.split(' ')) {
  extlangToLanguageMap[extlang] = 'zh';
}
const regionToScriptMap: Record<string, string> = {
  CN: 'Hans',
  HK: 'Hant',
  MO: 'Hant',
  SG: 'Hans',
  TW: 'Hant',
}
const regionToExtlangMap: Record<string, string> = {
  CN: 'cmn',
  HK: 'yue',
  MO: 'yue',
  SG: 'cmn',
  TW: 'cmn',
}

// https://www.rfc-editor.org/rfc/rfc5646
const localeRegex = /^([a-z]{2,8})(?:-([a-z]{3}(?:-[a-z]{3}){0,2}))?(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?(?:-[a-z\d]+)*$/;
// This expands:
// zh, cmn, zh-Hans and zh-CN to zh-cmn-Hans-CN
// zh-Hant, zh-TW and zh-Hant-TW to zh-cmn-Hant-TW
// yue, zh-HK and zh-Hant-HK to zh-yue-Hant-HK
function parseLocaleParts(locale: string): LocaleParts | undefined {
  const localeMatch = locale.toLowerCase().match(localeRegex);
  if (localeMatch) {
    let [, language, extlang, script, region] = localeMatch as (string | undefined)[];
    if (language && language.length === 3 && !extlang) {
      extlang = language;
      language = extlangToLanguageMap[extlang];
    }
    if (script) {
      script = script[0].toUpperCase() + script.slice(1);
    }
    region = region ? region.toUpperCase() : (extlangToRegionMap[extlang!] || scriptToRegionMap[script!] || languageToRegionMap[language!]);
    if (!extlang) {
      extlang = regionToExtlangMap[region!];
    }
    script = script ? script[0].toUpperCase() + script.slice(1) : regionToScriptMap[region!];
    return { language, extlang, script, region };
  }
}

function getBestMatchingLocale(browserLocales: readonly string[], availableLocales: readonly string[]): string {
  let parsedAvailableLocales: (LocaleParts | undefined)[];
  for (const browserLocale of browserLocales) {
    if (availableLocales.includes(browserLocale)) {
      return browserLocale;
    }
    const locale = parseLocaleParts(browserLocale);
    if (!locale) {
      continue;
    }
    if (!parsedAvailableLocales!) {
      parsedAvailableLocales = availableLocales.map(parseLocaleParts);
    }
    for (const parts of [['language'], ['extlang', 'script'], ['extlang'], ['script'], ['region']] as (keyof LocaleParts)[][]) {
      if (!parts.every(part => locale[part])) {
        continue;
      }
      const candidates = parsedAvailableLocales.map(
        (availableLocale) => availableLocale && parts.every(part => availableLocale[part] === locale[part])
      );
      if (candidates.filter(Boolean).length === 1) {
        return availableLocales[candidates.findIndex(Boolean)];
      }
    }
    for (const part of ['region', 'extlang', 'language'] as const) {
      if (!locale[part]) {
        continue;
      }
      const index = parsedAvailableLocales.findIndex(
        (availableLocale) => availableLocale && availableLocale[part] === locale[part]
      )
      if (index !== -1) {
        return availableLocales[index];
      }
    }
  }

  return 'en'; // Fallback to 'en' if no match is found
}

const availableLocales = Object.keys(locales);
const bestMatchingLocale = getBestMatchingLocale(navigator.languages, availableLocales);

export default createI18n({
  legacy: false,
  locale: bestMatchingLocale,
  fallbackLocale: 'en',
  messages: Object.fromEntries(
    Object.entries(locales).map(([key, [, value]]) => [key, value])
  ),
})
