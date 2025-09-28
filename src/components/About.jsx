import React, { useState, useEffect, useRef } from 'react';
import '../css/About.css';
import '../css/animations.css';
import ScrollReveal from './ScrollReveal';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function About() {
  const { t } = useI18n();
  const stats = [
    { value: 6, suffix: t('about.stats.0.suffix'), label: t('about.stats.0.label') },
    { value: 50, suffix: t('about.stats.1.suffix'), label: t('about.stats.1.label') },
    { value: 99, suffix: t('about.stats.2.suffix'), label: t('about.stats.2.label') }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          stats.forEach((stat, index) => {
            const start = performance.now();
            const duration = 1500; // ms
            const end = stat.value;

            const animate = now => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              const currentValue = Math.floor(easedProgress * end);

              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = currentValue;
                return newCounts;
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stats]);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="about-grid">
        <ScrollReveal delay={200}>
          <div className="about-card interactive-card hover-lift">
            <h2 className="animate-fade-in-up">{t('about.title')}</h2>
            <p className="lede animate-fade-in-up animate-delay-100">
              {t('about.body')}
            </p>
            <ul className="animate-fade-in-up animate-delay-200">
              {t('about.bullets').map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div 
                className="stat hover-glow smooth-transition animate-bounce-in" 
                key={stat.label}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <strong className="animate-pulse">{counts[i]}{stat.suffix}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <div className="divider-soft" aria-hidden="true" />
    </section>
  );
}
