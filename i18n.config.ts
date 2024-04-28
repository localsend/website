import ar from './lang/ar.json'
import cs from './lang/cs.json'
import de from './lang/de.json'
import en from './lang/en.json'
import es from './lang/es.json'
import fr from './lang/fr.json'
import he from './lang/he.json'
import it from './lang/it.json'
import ja from './lang/ja.json'
import km from './lang/km.json'
import pl from './lang/pl.json'
import ptBr from './lang/pt-BR.json'
import ptPT from './lang/pt-PT.json'
import ru from './lang/ru.json'
import th from './lang/th.json'
import tr from './lang/tr.json'
import uk from './lang/uk.json'
import zhCn from './lang/zh-CN.json'
import zhHk from './lang/zh-HK.json'
import zhTw from './lang/zh-TW.json'

export const localeMap: { [k: string] : string } = {
  'ar': 'العربية',
  'cs': 'Čeština',
  'de': 'Deutsch',
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
  'it': 'Italiano',
  'he': 'עברית',
  'ja': '日本語',
  'km': 'ភាសាខ្មែរ',
  'ru': 'Русский',
  'pl': 'Polski',
  'pt-BR': 'Português - Brasil',
  'pt-PT': 'Português - Portugal',
  'th': 'ภาษาไทย',
  'tr': 'Türkçe',
  'uk': 'Українська',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文 – 台灣',
  'zh-HK': '繁體中文 – 香港',
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    ar,
    cs,
    de,
    en,
    es,
    fr,
    he,
    it,
    ja,
    km,
    pl,
    'pt-BR': ptBr,
    'pt-PT': ptPT,
    ru,
    th,
    tr,
    uk,
    'zh-CN': zhCn,
    'zh-HK': zhHk,
    'zh-TW': zhTw,
  }
}))
