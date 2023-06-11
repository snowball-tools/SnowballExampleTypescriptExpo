import i18n from "i18next";
import {
  initReactI18next,
  useTranslation as originalUseTranslation,
} from "react-i18next";
import enTranslation from "./locales/en.json";
import koTranslation from "./locales/ko.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en: enTranslation,
    ko: koTranslation,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

// typesafe useTranslation hook
const useTranslation = () => {
  const { t: originalT, ...rest } = originalUseTranslation();

  const t = (key: string) => originalT(key, key);

  return { t, ...rest };
};

export default useTranslation;
