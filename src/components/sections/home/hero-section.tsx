import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { GlowOrb } from '@/components/shared/glow-orb';
import { StatItem } from '@/components/shared/stat-item';
import { TRUST_STATS } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-12 md:pt-16 pb-8 px-4 sm:px-6 lg:px-8 dot-grid overflow-hidden">
      {/* Background glowing orb */}
      <GlowOrb className="top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px]" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto py-8">

        {/* 3-Line Headline */}
        <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl">
          <span>We Turn Your</span>{' '}
          <span className="block mt-1">Facebook & Instagram Ads</span>{' '}
          <span className="block mt-1 text-[#00A8FF] bg-clip-text text-transparent bg-gradient-to-r from-[#00A8FF] via-[#00E5FF] to-[#4DC8FF]">
            Into Real Customers.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#B0BEC5] max-w-[620px] leading-relaxed font-sans">
          High-converting performance marketing for Restaurants & Clothing Brands in Bangladesh. We optimize targeting, lower cost per lead, and drive measurable revenue.
        </p>

        {/* Side-by-side CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-btn bg-[#00A8FF] hover:bg-[#00E5FF] text-white hover:text-[#0A1628] font-poppins font-bold text-base transition-all duration-300 shadow-xl shadow-[#00A8FF]/30 glow-hover"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-btn bg-[#0D2137]/80 hover:bg-[#0D2137] text-white border border-[#1A3A5C] hover:border-[#00A8FF] font-poppins font-semibold text-base transition-all duration-300 glow-hover"
          >
            <span>See Our Work</span>
          </Link>
        </div>

        {/* Trust Stats Row */}
        <div className="mt-14 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 bg-[#0D2137]/90 backdrop-blur-md border border-[#1A3A5C] rounded-card p-4 sm:p-6 shadow-2xl">
          {TRUST_STATS.map((stat, idx) => (
            <div key={stat.label} className="relative flex items-center justify-center">
              <StatItem value={stat.value} label={stat.label} />
              {idx < TRUST_STATS.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[#1A3A5C]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bouncing Scroll Indicator Arrow */}
      <div className="flex justify-center mt-6 animate-bounce">
        <a
          href="#specialize"
          aria-label="Scroll down to specialization section"
          className="p-2 rounded-full text-[#B0BEC5] hover:text-[#00A8FF] transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
