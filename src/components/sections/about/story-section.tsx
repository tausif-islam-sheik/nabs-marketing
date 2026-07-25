import React from 'react';
import { Logo } from '@/components/layout/logo';
import { Reveal } from '@/components/shared/reveal';

export function StorySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Story Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <span className="px-3.5 py-1.5 rounded-full border border-[#00A8FF]/30 bg-[#00A8FF]/10 text-[#00E5FF] text-xs font-mono font-semibold uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="mt-4 font-poppins text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Driven By Passion, Engineered For <span className="text-[#00A8FF]">Revenue</span>.
            </h2>
            <p className="text-[#B0BEC5] text-base leading-relaxed font-sans">
              NABS Marketing was founded with a singular focus: to stop Bangladeshi business owners from wasting hard-earned money on unoptimized Facebook and Instagram ads.
            </p>
            <p className="text-[#B0BEC5] text-base leading-relaxed font-sans">
              Unlike traditional agencies that sell vanity metrics like "impressions" and "likes," we specialize strictly in performance marketing. We measure success by real table bookings, food orders, and fashion sales generated directly for your business.
            </p>
          </Reveal>
        </div>

        {/* Right Column: Neon Glowing Logo Mark (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <Reveal delay={0.2}>
            <div className="relative p-12 rounded-2xl bg-[#0D2137]/90 border border-[#1A3A5C] flex flex-col items-center justify-center text-center shadow-2xl shadow-[#00A8FF]/20 group">
              <div className="filter drop-shadow-[0_0_25px_rgba(0,168,255,0.6)] group-hover:scale-105 transition-transform duration-300">
                <Logo variant="full" className="scale-125 my-4" />
              </div>
              <p className="mt-6 text-xs font-mono text-[#00E5FF] uppercase tracking-widest font-semibold">
                Facebook & Instagram Ads Agency
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
