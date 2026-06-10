"use client";
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import pt from "@/locales/pt.json";
import zh from "@/locales/zh.json";

const translations = { pt, zh };
const I18nContext = createContext({ locale: "pt", t: (k) => k });

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("repairnote-locale");
      if (saved) setLocale(saved);
      else if (navigator?.language?.startsWith("pt")) setLocale("pt");
    } catch {
      setLocale("zh");
    }
  }, []);

  useEffect(() => {
    try {
      document.documentElement.lang = locale === "pt" ? "pt-BR" : "zh-CN";
    } catch {}
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t: (key) => {
      const dict = translations[locale] || translations.zh;
      return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict) || key;
    }
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
