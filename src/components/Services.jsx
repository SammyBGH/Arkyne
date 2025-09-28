import React from 'react';
import '../css/Services.css';
import '../css/animations.css';
import ScrollReveal from './ScrollReveal';
import { useI18n } from '../i18n/I18nProvider.jsx';

const images = [
  'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop'
];

export default function Services() {
  const { t } = useI18n();
  const items = t('services.items');
  return (
    <section id="services" className="section services">
      <h2 className="text-gradient animate-fade-in-up">{t('services.title')}</h2>
      <p className="sub lede animate-fade-in-up animate-delay-100">{t('services.sub')}</p>

      <div className="services-grid">
        {items.map((s, i) => (
          <ScrollReveal key={s.title} delay={150 + i * 100}>
            <article className="service-card interactive-card hover-lift smooth-transition">
              <div className="service-media">
                <img
                  src={images[i % images.length]}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <div className="service-overlay">
                  <span className="badge" aria-hidden>{s.icon}</span>
                </div>
              </div>
              <div className="service-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
      <div className="divider-soft" aria-hidden="true" />
    </section>
  );
}
