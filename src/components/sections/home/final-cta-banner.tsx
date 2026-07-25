import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GlowOrb } from '@/components/shared/glow-orb';
import { Reveal } from '@/components/shared/reveal';

interface FinalCtaBannerProps {
  title?: string;
  subTitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function FinalCtaBanner({
  title = 'Ready to Turn Your Meta Ads Into Real Revenue?',
  subTitle = "Claim your free 30-minute campaign strategy consultation. No pressure, no lock-in contract—just real actionable advice tailored for your Bangladesh business.",
  buttonText = "Start Growing Today — It's Free to Talk",
  buttonHref = '/contact',
}: FinalCtaBannerProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A1628] via-[#0D2137] to-[#0A1628] border-t border-[#1A3A5C] overflow-hidden">
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#B0BEC5] max-w-2xl mx-auto leading-relaxed font-sans">
            {subTitle}
          </p>

          <div className="mt-8 flex flex-col items-center">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-btn bg-[#00A8FF] hover:bg-[#00E5FF] text-white hover:text-[#0A1628] font-poppins font-extrabold text-base sm:text-lg transition-all duration-300 shadow-2xl shadow-[#00A8FF]/40 glow-hover hover:scale-105"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-[#00E5FF] font-medium font-sans">
              <CheckCircle2 className="w-4 h-4 text-[#69FF47]" />
              <span>Fast 24-hour response guarantee • 100% free consultation</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
