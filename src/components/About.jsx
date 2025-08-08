import React from 'react';
import '../css/About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-card">
          <h2>About Arkyn</h2>
          <p>
            Arkyn is a boutique studio that blends product thinking, beautiful interfaces and robust engineering.
            We work with startups and organisations to ship digital products that people enjoy using.
          </p>
          <ul>
            <li>Human-centered design</li>
            <li>End-to-end product development</li>
            <li>Performance and accessibility-first</li>
          </ul>
        </div>
        <div className="about-stats">
          <div className="stat">
            <strong>6+</strong>
            <span>Years experience</span>
          </div>
          <div className="stat">
            <strong>50+</strong>
            <span>Projects completed</span>
          </div>
          <div className="stat">
            <strong>99%</strong>
            <span>Client satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
