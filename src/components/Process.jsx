import React from 'react';
import '../css/Process.css';
import '../css/animations.css';
import ScrollReveal from './ScrollReveal';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Process() {
  const { t } = useI18n();
  const steps = t('process.steps');

  return (
    <section id="process" className="section process ambient-gradient">
      <h2 className="text-gradient">{t('process.title')}</h2>
      <div className="process-steps">
        {steps.map((s, i) => (
          <ScrollReveal key={s.title} delay={120 + i * 90}>
            <div className="step interactive-card hover-lift">
              <div className="step-index">{i + 1}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
