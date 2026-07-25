'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-[#0A1628]/90 text-[#00A8FF] border border-[#00A8FF] hover:bg-[#00A8FF] hover:text-white transition-all duration-300 shadow-lg shadow-[#00A8FF]/20 focus:outline-none glow-hover animate-in fade-in"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
