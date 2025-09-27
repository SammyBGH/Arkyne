import React, { useState } from 'react';
import '../css/FAQ.css';
import '../css/animations.css';
import ScrollReveal from './ScrollReveal';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function FAQ() {
  const { t } = useI18n();
  const qa = t('faq.qa');
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section faq">
      <h2 className="text-gradient animate-fade-in-up">{t('faq.title')}</h2>
      <div className="faq-list">
        {qa.map((item, i) => (
          <ScrollReveal key={i} delay={100 + i * 80}>
            <details className={`faq-item ${open === i ? 'open' : ''}`} open={open === i} onToggle={(e) => e.target.open && setOpen(i)}>
              <summary>
                <span>{item.q}</span>
                <span className="chev" aria-hidden>▾</span>
              </summary>
              <div className="answer">{item.a}</div>
            </details>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
