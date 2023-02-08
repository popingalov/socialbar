import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './translation/en/en.json';
import translationUa from './translation/ua/ua.json';

const resources = {
  en: {
    translation: translationEn,
  },
  ua: {
    translation: translationUa,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ua', // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
