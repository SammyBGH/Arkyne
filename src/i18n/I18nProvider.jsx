import React, { createContext, useContext, useEffect, useState } from 'react';
import { STRINGS } from './strings';

const I18nContext = createContext({ lang: 'en', setLang: () => {}, t: (p) => p });

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const stored = localStorage.getItem('arkyn-lang');
    if (stored && (stored === 'en' || stored === 'fr')) setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('arkyn-lang', lang);
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
