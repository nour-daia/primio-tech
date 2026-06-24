import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../locales/en";
import ar from "../locales/ar";

const LOCALE_KEY = "primio-locale";
const LOCALES = { en, ar };

const LocaleContext = createContext(null);

function getInitialLocale() {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem(LOCALE_KEY) || "en";
}

function applyLocale(locale) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("lang", locale);
  document.documentElement.setAttribute("dir", dir);
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale);

  useEffect(() => {
    applyLocale(locale);
    localStorage.setItem(LOCALE_KEY, locale);
  }, [locale]);

  const setLocale = (next) => setLocaleState(next);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: LOCALES[locale] || en,
      dir: locale === "ar" ? "rtl" : "ltr",
      isRtl: locale === "ar",
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
