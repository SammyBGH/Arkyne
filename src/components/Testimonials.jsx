import React from 'react';
import '../css/Testimonials.css';

const notes = [
  { name: 'Comfort A.', quote: 'Arkyn helped us ship quickly and thoughtfully. Highly recommended.' },
  { name: 'Paul N.', quote: 'Clean code, fast delivery, and excellent communication.' },
  { name: 'Maya K.', quote: 'Transformed our product and made it user-friendly.' }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <h2>What clients say</h2>

      <div className="test-grid">
        {notes.map(n => (
          <div key={n.name} className="test-card">
            <p className="quote">“{n.quote}”</p>
            <div className="meta">
              <div className="avatar" aria-hidden>{n.name.charAt(0)}</div>
              <div>
                <strong>{n.name}</strong>
                <div className="role">Founder / Product Lead</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
