import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../css/Testimonials.css';
import '../css/animations.css';

const notes = [
  { name: 'Comfort A.', quote: 'Arkyne helped us ship quickly and thoughtfully. Highly recommended.' },
  { name: 'Paul N.', quote: 'Clean code, fast delivery, and excellent communication.' },
  { name: 'Maya K.', quote: 'Transformed our product and made it user-friendly.' }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const autoPlayRef = useRef(null);

  const items = useMemo(() => notes, []);
  const count = items.length;

  // Autoplay
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 4500);
    return () => clearInterval(autoPlayRef.current);
  }, [count]);

  // Pause on hover
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onEnter = () => autoPlayRef.current && clearInterval(autoPlayRef.current);
    const onLeave = () => {
      autoPlayRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, 4500);
    };
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [count]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count]);

  // Touch / swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    const deltaX = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 60) {
      if (deltaX < 0) setIndex((i) => (i + 1) % count);
      else setIndex((i) => (i - 1 + count) % count);
      touchStartX.current = null;
    }
  };
  const onTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <section id="testimonials" className="section testimonials">
      <h2 className="text-gradient animate-fade-in-up">What clients say</h2>
      <div
        ref={containerRef}
        className="carousel animate-fade-in-up animate-delay-200"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <div
          className="carousel-track smooth-transition"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((n, i) => (
            <div className="carousel-slide" key={n.name} aria-hidden={index !== i}>
              <div className="test-card hover-lift interactive-card">
                <p className="quote">“{n.quote}”</p>
                <div className="meta">
                  <div className="avatar" aria-hidden>{n.name.charAt(0)}</div>
                  <div>
                    <strong>{n.name}</strong>
                    <div className="role">Founder / Product Lead</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-btn prev focus-ring"
          aria-label="Previous testimonial"
          onClick={() => setIndex((i) => (i - 1 + count) % count)}
        >
          ‹
        </button>
        <button
          className="carousel-btn next focus-ring"
          aria-label="Next testimonial"
          onClick={() => setIndex((i) => (i + 1) % count)}
        >
          ›
        </button>

        <div className="carousel-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
