import ar from './lang/ar.json'
import cs from './lang/cs.json'
import de from './lang/de.json'
import en from './lang/en.json'
import es from './lang/es.json'
import fr from './lang/fr.json'
import he from './lang/he.json'
import hi from './lang/hi.json'
import it from './lang/it.json'
import ja from './lang/ja.json'
import km from './lang/km.json'
import ko from './lang/ko.json'
import mr from './lang/mr.json'
import pl from './lang/pl.json'
import ptBr from './lang/pt-BR.json'
import ptPT from './lang/pt-PT.json'
import ru from './lang/ru.json'
import th from './lang/th.json'
import ta from './lang/ta.json'
import tr from './lang/tr.json'
import uk from './lang/uk.json'
import vi from './lang/vi.json'
import zhCn from './lang/zh-CN.json'
import zhHk from './lang/zh-HK.json'
import zhTw from './lang/zh-TW.json'
import te from './lang/te.json'
import mal from './lang/mal-IN.json'

export const localeMap: { [k: string]: string } = {
  'ar': 'العربية',
  'cs': 'Čeština',
  'de': 'Deutsch',
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
  'it': 'Italiano',
  'he': 'עברית',
  'hi': 'हिन्दी',
  'ja': '日本語',
  'km': 'ភាសាខ្មែរ',
  'ko': '한국어',
  'mr': 'मराठी',
  'ru': 'Русский',
  'pl': 'Polski',
  'pt-BR': 'Português - Brasil',
  'pt-PT': 'Português - Portugal',
  'th': 'ภาษาไทย',
  'ta': 'தமிழ்',
  'te': 'తెలుగు',
  'tr': 'Türkçe',
  'uk': 'Українська',
  'vi': 'Tiếng Việt',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文 – 台灣',
  'zh-HK': '繁體中文 – 香港',
  'mal-IN' : 'മലയാളം',
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
    hi,
    it,
    ja,
    km,
    ko,
    mr,
    pl,
    'pt-BR': ptBr,
    'pt-PT': ptPT,
    ru,
    th,
    ta,
    te,
    tr,
    uk,
    vi,
    'zh-CN': zhCn,
    'zh-HK': zhHk,
    'zh-TW': zhTw,
    'mal-IN' : mal,
  }
}))
