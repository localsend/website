import ar from "./lang/ar.json";
import cs from "./lang/cs.json";
import de from "./lang/de.json";
import el from "./lang/el.json";
import en from "./lang/en.json";
import es from "./lang/es.json";
import fa from "./lang/fa.json";
import fil from "./lang/fil.json";
import fr from "./lang/fr.json";
import he from "./lang/he.json";
import hi from "./lang/hi.json";
import id from "./lang/id.json";
import it from "./lang/it.json";
import ja from "./lang/ja.json";
import ka from "./lang/ka.json";
import km from "./lang/km.json";
import ko from "./lang/ko.json";
import mal from "./lang/mal-IN.json";
import mr from "./lang/mr.json";
import nl from "./lang/nl.json";
import pl from "./lang/pl.json";
import ptBr from "./lang/pt-BR.json";
import ptPT from "./lang/pt-PT.json";
import ru from "./lang/ru.json";
import sr from "./lang/sr.json";
import sk from "./lang/sk.json";
import th from "./lang/th.json";
import ta from "./lang/ta.json";
import te from "./lang/te.json";
import tr from "./lang/tr.json";
import uk from "./lang/uk.json";
import vi from "./lang/vi.json";
import zhCn from "./lang/zh-CN.json";
import zhHk from "./lang/zh-HK.json";
import zhTw from "./lang/zh-TW.json";
import bn from "./lang/bn.json";
import ug from "./lang/ug.json";
import sv from "./lang/sv.json";

export const localeMap: { [k: string]: string } = {
  ar: "العربية",
  bn: "বাংলা",
  cs: "Čeština",
  de: "Deutsch",
  el: "Ελληνικά",
  en: "English",
  es: "Español",
  fa: "فارسی",
  fil: "Filipino",
  fr: "Français",
  id: "Bahasa Indonesia",
  it: "Italiano",
  he: "עברית",
  hi: "हिन्दी",
  ja: "日本語",
  ka: "ಕನ್ನಡ",
  km: "ភាសាខ្មែរ",
  ko: "한국어",
  "mal-IN": "മലയാളം",
  mr: "मराठी",
  nl: "Nederlands",
  ru: "Русский",
  sr: "Srpski",
  sv: "Svenska",
  sk: "Slovenčina",
  pl: "Polski",
  "pt-BR": "Português - Brasil",
  "pt-PT": "Português - Portugal",
  th: "ภาษาไทย",
  ta: "தமிழ்",
  te: "తెలుగు",
  tr: "Türkçe",
  uk: "Українська",
  ug: "ئۇيغۇرچە",
  vi: "Tiếng Việt",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文 – 台灣",
  "zh-HK": "繁體中文 – 香港",
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    ar,
    bn,
    cs,
    de,
    el,
    en,
    es,
    fa,
    fil: fil,
    fr,
    he,
    hi,
    id,
    it,
    ja,
    ka,
    km,
    ko,
    "mal-IN": mal,
    mr,
    nl,
    pl,
    "pt-BR": ptBr,
    "pt-PT": ptPT,
    ru,
    sr,
    sv,
    sk,
    th,
    ta,
    te,
    tr,
    uk,
    ug,
    vi,
    "zh-CN": zhCn,
    "zh-HK": zhHk,
    "zh-TW": zhTw,
  },
}));
