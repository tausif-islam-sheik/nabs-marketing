import React from 'react';
import Link from 'next/link';
import { ArrowRight, Tag, Gift } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

export function StarterNoticeBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <div className="p-8 sm:p-10 rounded-card bg-gradient-to-r from-[#0D2137] via-[#0A1628] to-[#0D2137] border-2 border-[#FFD600] shadow-2xl shadow-[#FFD600]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5 max-w-2xl">
            <div className="p-3.5 rounded-2xl bg-[#FFD600]/10 text-[#FFD600] border border-[#FFD600]/30 shrink-0">
              <Gift className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD600]/20 text-[#FFD600] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Tag className="w-3.5 h-3.5" />
                <span>Limited Founding Client Offer</span>
              </div>
              <h3 className="font-poppins text-2xl font-bold text-white">
                Be Our Next Featured Success Story
              </h3>
              <p className="mt-2 text-sm text-[#B0BEC5] leading-relaxed font-sans">
                We are locking in introductory rates for our first 10 brand partners this month. Get full-service Meta ad campaign management at a special founding client discount.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact?offer=founding-client"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-btn bg-[#FFD600] hover:bg-[#FFE555] text-[#0A1628] font-poppins font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-[#FFD600]/20 glow-hover"
            >
              <span>Claim Founding Client Rate</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
