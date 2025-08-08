import React from 'react';
import '../css/Hero.css';
import heroImg from '../assets/images/hero-illustration.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-left">
          <h1>Arkyn | Refuge of Light</h1>
          <p>
            We craft human-centred digital products, websites, apps, and brand experiences — built for clarity and trust.
            From idea to launch, we make tech feel personal.
          </p>

          <div className="hero-ctas">
            <a className="btn primary" href="#services">Explore Services</a>
            <a className="btn ghost" href="#contact">Talk on WhatsApp</a>
          </div>

          <div className="hero-features">
            <div>
              <strong>Design-forward</strong>
              <span>Intuitive UI & brand clarity</span>
            </div>
            <div>
              <strong>Engineered to scale</strong>
              <span>Reliable, production-ready stacks</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Arkyn illustration" />
        </div>
      </div>
    </section>
  );
}
