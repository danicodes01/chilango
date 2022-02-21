import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './Components/UI/media/en/translationEn.json'
import translationSp from './Components/UI/media/sp/translation.Sp.json'

const resources = {
  en: {
    translation: translationEn
  },
  sp: {
    translation: translationSp
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });


export default i18n;