import React, { createContext, useContext, useEffect, useState } from 'react';
import { STRINGS } from './strings';

const I18nContext = createContext({ lang: 'en', setLang: () => {}, t: (p) => p });

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Read new key first, then fall back to legacy key
    const current = localStorage.getItem('arkyne-lang');
    const legacy = localStorage.getItem('arkyn-lang');
    const val = current || legacy;
    if (val && (val === 'en' || val === 'fr')) setLang(val);
    // Migrate legacy key to new key if needed
    if (!current && legacy) {
      localStorage.setItem('arkyne-lang', legacy);
      localStorage.removeItem('arkyn-lang');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('arkyne-lang', lang);
  }, [lang]);

  const t = (path) => {
    const segs = path.split('.');
    let cur = STRINGS[lang];
    for (const s of segs) {
      if (!cur) return path;
      cur = cur[s];
    }
    return cur ?? path;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
