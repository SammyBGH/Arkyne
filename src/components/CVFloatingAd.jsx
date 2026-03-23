import React, { useState, useEffect } from 'react';
import '../css/CVFloatingAd.css';

export default function CVFloatingAd() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCVClick = () => {
    window.open('https://cvforge-io.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cv-floating-ad">
      <div className="cv-ad-content">
        <button className="cv-ad-close" onClick={handleClose} aria-label="Close">
          ×
        </button>
        
        <div className="cv-ad-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="cv-ad-text">
          <h3>Build Your Perfect CV</h3>
          <p>Professional CV builder with modern templates</p>
        </div>
        
        <button className="cv-ad-cta" onClick={handleCVClick}>
          Try CVForge
        </button>
      </div>
    </div>
  );
}
