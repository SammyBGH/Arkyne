import React from 'react';
import '../css/Services.css';

const services = [
  { title: 'Product Design', desc: 'Research, UI/UX, prototyping and design systems.' },
  { title: 'Web Apps', desc: 'React/Vite, FastAPI/Node.js, performance-first web apps.' },
  { title: 'Mobile', desc: 'React Native & hybrid apps for rapid delivery.' },
  { title: 'AI & Automation', desc: 'Smart features, model integration & pipelines.' }
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <h2>What we do</h2>
      <p className="sub">Services that turn ideas into reliable products.</p>

      <div className="services-grid">
        {services.map(s => (
          <div key={s.title} className="service-card">
            <div className="icon" aria-hidden>⚡</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
