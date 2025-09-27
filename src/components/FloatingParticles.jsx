import React, { useEffect, useRef } from 'react';

export default function FloatingParticles({ count = 20, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random animation delay
      particle.style.animationDelay = Math.random() * 6 + 's';
      
      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random opacity
      particle.style.opacity = Math.random() * 0.6 + 0.2;
      
      container.appendChild(particle);
    }
  }, [count]);

  return (
    <div 
      ref={containerRef} 
      className={`particles-container ${className}`}
      aria-hidden="true"
    />
  );
}
