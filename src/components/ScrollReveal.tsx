import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'glow' | 'matrix' | 'hologram' | 'particle' | 'cyber';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    delay,
    triggerOnce: true 
  });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up': return 'fade-in-up';
      case 'fade-left': return 'fade-in-left';
      case 'fade-right': return 'fade-in-right';
      case 'scale': return 'scale-in';
      case 'glow': return 'glow-in tech-glow';
      case 'matrix': return 'matrix-reveal';
      case 'hologram': return 'hologram';
      case 'particle': return 'particle-trail';
      case 'cyber': return 'cyber-grid';
      default: return 'fade-in-up';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${getAnimationClass()} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;