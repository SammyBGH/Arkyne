import React, { useState } from 'react';
import '../css/Portfolio.css';
import p1 from '../assets/images/portfolio-1.png';
import p2 from '../assets/images/portfolio-2.png';
import p3 from '../assets/images/portfolio-3.png';
import p4 from '../assets/images/portfolio-4.png';
import p5 from '../assets/images/portfolio-5.png';

const items = [
  { id: 1, img: p1, title: 'Imagen — Image Classifier' },
  { id: 2, img: p2, title: 'StitchIt — E-commerce' },
  { id: 3, img: p3, title: 'Resumio — AI Resume Builder' },
  { id: 4, img: p4, title: 'Dashboard for a Piezoelectric Power Generator' },
  { id: 5, img: p5, title: 'Payment platform for my websites' }
];

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  // Decide which items to display
  const displayedItems = showAll ? items : items.slice(0, 3);

  return (
    <section id="portfolio" className="section portfolio">
      <h2>Selected Work</h2>
      <p className="sub">A small sample of projects we've shipped.</p>

      <div className="portfolio-grid">
        {displayedItems.map(it => (
          <div className="port-item" key={it.id}>
            <img src={it.img} alt={it.title} />
            <div className="overlay">
              <h4>{it.title}</h4>
              <a href="#contact" className="link">Discuss this</a>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className="more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'More'}
        </button>
      </div>
    </section>
  );
}
