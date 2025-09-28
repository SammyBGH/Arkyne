import React from 'react';
import '../css/Hero.css';
import '../css/animations.css';
import heroImg from '../assets/images/hero-illustration.jpg';
import FloatingParticles from './FloatingParticles';
import ScrollReveal from './ScrollReveal';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="hero" className="hero-section">
      <FloatingParticles count={15} />
      
      <div className="hero-grid">
        <ScrollReveal className="hero-left" delay={200}>
          <h1 className="text-gradient animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="animate-fade-in-up animate-delay-200">
            {t('hero.body1')} {t('hero.body2')}
          </p>

          <div className="hero-ctas animate-fade-in-up animate-delay-300">
            <a className="btn primary hover-lift smooth-transition focus-ring" href="#services">
              {t('hero.cta_services')}
            </a>
            <a className="btn whatsapp hover-glow smooth-transition focus-ring" href="#contact">
              {t('hero.cta_whatsapp')}
            </a>
          </div>

          <div className="hero-features animate-fade-in-up animate-delay-400">
            <div className="interactive-card">
              <strong>{t('hero.feat1_t')}</strong>
              <span>{t('hero.feat1_d')}</span>
            </div>
            <div className="interactive-card">
              <strong>{t('hero.feat2_t')}</strong>
              <span>{t('hero.feat2_d')}</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="hero-right" delay={400}>
          <div className="hero-image-container">
            <img 
              src={heroImg} 
              alt="Arkyne illustration" 
              className="animate-float hover-scale smooth-transition"
              loading="eager"
              fetchpriority="high"
              width="800"
              height="600"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
