import React, { useState, useRef, useEffect } from 'react';
import '../css/Portfolio.css';
import '../css/animations.css';
import ScrollReveal from './ScrollReveal';
import p1 from '../assets/images/portfolio-1.png';
import p2 from '../assets/images/portfolio-2.png';
import p3 from '../assets/images/portfolio-3.png';
import p4 from '../assets/images/portfolio-4.png';
import p5 from '../assets/images/portfolio-5.png';
import { useI18n } from '../i18n/I18nProvider.jsx';

const items = [
  { id: 1, img: p1, title: 'Imagen — Image Classifier' },
  { id: 2, img: p2, title: 'StitchIt — E-commerce' },
  { id: 3, img: p3, title: 'Resumio — AI Resume Builder' },
  { id: 4, img: p4, title: 'Dashboard for a Piezoelectric Power Generator' },
  { id: 5, img: p5, title: 'Payment platform for my websites' }
];

export default function Portfolio() {
  const { t } = useI18n();
  const [showAll, setShowAll] = useState(false);
  const [maxHeight, setMaxHeight] = useState('auto');
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const calculateMaxHeight = () => {
    if (!containerRef.current) return;
    const grid = containerRef.current;
    const children = Array.from(grid.children);
    const gridStyle = getComputedStyle(grid);
    const columns = gridStyle.gridTemplateColumns.split(' ').length;
    const gap = parseInt(gridStyle.rowGap || '16');

    if (showAll) {
      // Show all items
      setMaxHeight(`${grid.scrollHeight}px`);
    } else {
      // Show only first 3 items
      const rowsToShow = Math.ceil(3 / columns);
      const rowHeights = [];

      for (let r = 0; r < rowsToShow; r++) {
        const startIndex = r * columns;
        const rowItems = children.slice(startIndex, startIndex + columns);
        const rowHeight = Math.max(...rowItems.map(c => c.offsetHeight));
        rowHeights.push(rowHeight);
      }

      const totalHeight = rowHeights.reduce((a, b) => a + b, 0) + (rowsToShow - 1) * gap;
      setMaxHeight(`${totalHeight}px`);
    }
  };

  useEffect(() => {
    calculateMaxHeight();

    window.addEventListener('resize', calculateMaxHeight);
    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, [showAll]);

  // Modal keyboard close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') beginClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openCaseStudy = (item) => {
    setClosing(false);
    setActive({
      ...item,
      description:
        'A polished, production-ready build focusing on performance, accessibility, and a delightful user experience. We partnered closely with stakeholders to define scope, iterate quickly, and ship value.',
      tags: ['Design', 'Frontend', 'Backend', 'Performance'],
      link: '#contact'
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setClosing(false);
  };

  const beginClose = (delay = 300) => {
    setClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setClosing(false);
    }, delay);
  };

  return (
    <section id="portfolio" className="section portfolio">
      <h2 className="text-gradient animate-fade-in-up">{t('portfolio.title')}</h2>
      <p className="sub lede animate-fade-in-up animate-delay-100">{t('portfolio.sub')}</p>

      <div
        className="portfolio-grid-wrapper"
        style={{ maxHeight }}
      >
        <div className="portfolio-grid" ref={containerRef}>
          {items.map((it, i) => (
            <ScrollReveal key={it.id} delay={150 + i * 80}>
              <div
                className="port-item interactive-card hover-lift"
                onClick={() => openCaseStudy(it)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openCaseStudy(it)}
                aria-label={`Open case study: ${it.title}`}
              >
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="overlay">
                  <h4>{it.title}</h4>
                  <span className="view-link">{t('portfolio.view')}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className="more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? t('portfolio.less') : t('portfolio.more')}
        </button>
      </div>

      {/* Modal */}
      {modalOpen && active && (
        <div className={`modal-backdrop ${closing ? 'closing' : ''}`} onClick={() => beginClose()} role="dialog" aria-modal="true">
          <div className="modal-card animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close focus-ring" aria-label="Close" onClick={() => beginClose()}>×</button>
            <div className="modal-media">
              <img src={active.img} alt={active.title} />
            </div>
            <div className="modal-content">
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="tags">
                {active.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="modal-actions">
                <a
                  className="btn primary focus-ring"
                  href={active.link}
                  onClick={() => {
                    try {
                      const msg = `Hi, Arkyne, I would like to discuss: ${active.title}.`;
                      sessionStorage.setItem('contactPrefill', msg);
                    } catch {}
                    beginClose(500);
                  }}
                >
                  {t('portfolio.discuss')}
                </a>
                <button className="btn ghost focus-ring" onClick={() => beginClose()}>{t('portfolio.close')}</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="divider-soft" aria-hidden="true" />
    </section>
  );
}
