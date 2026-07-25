'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, X, Sparkles } from 'lucide-react';
import { useStickyCtaStore } from '@/store/use-sticky-cta-store';

export function StickyCtaBar() {
  const pathname = usePathname();
  const { isDismissed, dismissCta } = useStickyCtaStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Desktop only, home page only
    if (pathname !== '/') return;

    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, isDismissed]);

  if (pathname !== '/' || isDismissed || !isVisible) return null;

  return (
    <div className="hidden md:block fixed top-20 left-0 right-0 z-40 bg-[#0D2137] border-b border-[#00A8FF] shadow-xl animate-in slide-in-from-top-4 duration-300">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4 text-sm font-poppins">
        <div className="flex items-center gap-3">
          <div className="p-1 rounded bg-[#00A8FF]/20 text-[#00E5FF]">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-white font-medium">
            Ready to turn your Facebook & Instagram ads into revenue?
          </span>
          <span className="text-[#B0BEC5] text-xs hidden lg:inline">
            Free strategy call • No obligation
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-btn bg-[#00A8FF] hover:bg-[#00E5FF] text-white hover:text-[#0A1628] font-bold text-xs transition-all shadow-md"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={dismissCta}
            aria-label="Dismiss notification bar"
            className="p-1 rounded text-[#B0BEC5] hover:text-white hover:bg-[#1A3A5C] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
