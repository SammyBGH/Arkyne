import React, { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Handle scroll shadow/color
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner" ref={navRef}>
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          <img src={logo} alt="Arkyn logo" />
          <span>Arkyn</span>
        </a>

        <nav className={`navlinks ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
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
