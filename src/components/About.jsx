import React, { useState, useEffect, useRef } from 'react';
import '../css/About.css';

export default function About() {
  const stats = [
    { value: 6, suffix: '+', label: 'Years experience' },
    { value: 50, suffix: '+', label: 'Projects completed' },
    { value: 99, suffix: '%', label: 'Client satisfaction' }
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
          {stats.map((stat, i) => (
            <div className="stat" key={stat.label}>
              <strong>{counts[i]}{stat.suffix}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
