import React from 'react';
import '../css/CTABand.css';
import '../css/animations.css';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function CTABand() {
  const { t } = useI18n();
  const onWhatsApp = () => {
    window.open('https://wa.me/233508748443', '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="section cta-band ambient-gradient-soft">
      <div className="cta-card">
        <h2 className="text-gradient">{t('cta.title')}</h2>
        <p>{t('cta.body')}</p>
        <div className="cta-actions">
          <a className="btn primary" href="#contact">{t('cta.contact')}</a>
          <button className="btn ghost" onClick={onWhatsApp}>{t('cta.whatsapp')}</button>
        </div>
      </div>
    </section>
  );
}
