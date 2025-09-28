import React, { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';
import logo from '../assets/images/logo.png';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const navRef = useRef(null);
  const { lang, setLang, t } = useI18n();

  // Handle scroll shadow/color
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Observe sections to set active nav link
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // (Removed dark mode toggle per request)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const links = [
    { id: 'hero', key: 'home' },
    { id: 'about', key: 'about' },
    { id: 'services', key: 'services' },
    { id: 'portfolio', key: 'portfolio' },
    { id: 'testimonials', key: 'testimonials' },
    { id: 'contact', key: 'contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner" ref={navRef}>
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          <img src={logo} alt="Arkyne logo" />
          <span>Arkyne</span>
        </a>

        <nav className={`navlinks ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={activeId === l.id ? 'active' : ''}
              aria-current={activeId === l.id ? 'page' : undefined}
            >
              {t(`nav.${l.key}`)}
            </a>
          ))}
          <div className="lang-toggle" role="group" aria-label="Language switcher">
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
            <button
              type="button"
              className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
              onClick={() => setLang('fr')}
            >FR</button>
          </div>
        </nav>

        <button
          aria-label="Toggle menu"
          className={`hamburger ${open ? 'is-active' : ''}`}
          onClick={() => setOpen(o => !o)}
        >
          <svg viewBox="0 0 100 80" width="28" height="20" aria-hidden="true">
            <rect width="100" height="10" rx="8"></rect>
            <rect y="30" width="100" height="10" rx="8"></rect>
            <rect y="60" width="100" height="10" rx="8"></rect>
          </svg>
        </button>
      </div>
    </header>
  );
}
