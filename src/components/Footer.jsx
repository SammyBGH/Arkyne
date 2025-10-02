import React, { useState } from "react";
import "../css/Footer.css";
import "../css/animations.css";
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Footer() {
  const { t } = useI18n();
  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL || '';
  const newsletterApiUrl = backendBaseUrl ? `${backendBaseUrl}/api/newsletter` : '/api/newsletter';

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'already' | null
  const [fade, setFade] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!/.+@.+\..+/.test(email.trim())) {
      setStatus('error');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(newsletterApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer-newsletter' }),
      });
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json().catch(() => ({}));
      if (data && data.alreadySubscribed) {
        setStatus('already');
      } else {
        setStatus('success');
      }
      setEmail('');
      // Start visual fade 500ms before removal
      setFade(false);
      setTimeout(() => setFade(true), 2500);
      // Auto-dismiss success message after 3 seconds
      setTimeout(() => {
        setStatus(null);
        setFade(false);
      }, 3000);
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="brand-name text-gradient">{t('footer.brand')}</p>
            <p className="tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-links">
            <nav className="footer-nav">
              <a href="#about">{t('footer.nav.about')}</a>
              <a href="#services">{t('footer.nav.services')}</a>
              <a href="#portfolio">{t('footer.nav.portfolio')}</a>
              <a href="#contact">{t('footer.nav.contact')}</a>
            </nav>
            <div className="socials">
              <a href="https://github.com/SammyBGH" target="_blank" rel="noreferrer" aria-label="GitHub" className="social">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.78.85 1.24 1.92 1.24 3.23 0 4.61-2.8 5.62-5.48 5.92.43.38.81 1.11.81 2.24v3.32c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/samuel-boakye1/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.77 2.65 4.77 6.1V24h-4v-7.9c0-1.9-.03-4.33-2.64-4.33-2.64 0-3.05 2.06-3.05 4.19V24h-4V8z" fill="currentColor"/>
                </svg>
              </a>
              <a href="mailto:arkyn.tech1@gmail.com" aria-label="Email" className="social">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.75-.25a.75.75 0 0 0-.75.75v.25l7.41 4.63a.75.75 0 0 0 .78 0L20 7.5V7.25a.75.75 0 0 0-.75-.75H4.75Zm15.25 3.2-6.9 4.31a2.25 2.25 0 0 1-2.34 0L4 9.7v7.55c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75V9.7Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-newsletter">
            <p className="newsletter-title">{t('footer.nl_title')}</p>
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                placeholder={t('footer.nl_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                aria-label="Email address"
                required
              />
              <button className="btn primary" type="submit" disabled={loading}>
                {loading ? '…' : t('footer.nl_subscribe')}
              </button>
            </form>
            {status === 'success' && (
              <p className={`nl-success${fade ? ' fade-out' : ''}`} role="status" aria-live="polite">{t('footer.nl_success')}</p>
            )}
            {status === 'already' && (
              <p className={`nl-success${fade ? ' fade-out' : ''}`} role="status" aria-live="polite">{t('footer.nl_already')}</p>
            )}
            {status === 'error' && (
              <p className="nl-error" role="status" aria-live="polite">{t('footer.nl_error')}</p>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.bottom')(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
}
