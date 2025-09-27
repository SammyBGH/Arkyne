import React from 'react';
import '../css/Clients.css';
import '../css/animations.css';
import ScrollReveal from './ScrollReveal';

const logos = [
  { name: 'Stripe', src: 'https://unpkg.com/simple-icons@v9/icons/stripe.svg' },
  { name: 'Google', src: 'https://unpkg.com/simple-icons@v9/icons/google.svg' },
  { name: 'Shopify', src: 'https://unpkg.com/simple-icons@v9/icons/shopify.svg' },
  { name: 'Notion', src: 'https://unpkg.com/simple-icons@v9/icons/notion.svg' },
  { name: 'Figma', src: 'https://unpkg.com/simple-icons@v9/icons/figma.svg' }
];

export default function Clients() {
  return (
    <section className="section clients" aria-label="Clients">
      <h2 className="sr-only">Clients</h2>
      <ScrollReveal>
        <div className="clients-row">
          {logos.map((l, i) => (
            <div className="client" key={l.name} style={{ animationDelay: `${i * 80}ms` }}>
              <img src={l.src} alt={l.name} loading="lazy" />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
