import React from 'react';
import { Mail, UserCheck } from 'lucide-react';
import { InstagramIcon } from '@/components/shared/instagram-icon';
import { BRAND } from '@/lib/constants';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

export function FounderSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Reveal>
        <SectionHeading
          eyebrow="Leadership"
          eyebrowIcon={UserCheck}
          title="Meet The Founder"
          highlightedTitle="Behind NABS"
          description="Direct, hands-on campaign leadership for every single client partnership."
        />
      </Reveal>

      <Reveal delay={0.15}>
        <div className="p-8 sm:p-10 rounded-card bg-[#0D2137]/90 border border-[#1A3A5C] flex flex-col md:flex-row items-center gap-8 shadow-2xl glow-hover">
          {/* Founder Avatar with Neon Ring Border */}
          <div className="relative shrink-0">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#00A8FF] via-[#00E5FF] to-[#0D2137] p-[3px] shadow-2xl shadow-[#00A8FF]/40">
              <div className="w-full h-full rounded-full bg-[#0A1628] flex items-center justify-center">
                <span className="font-poppins font-black text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#00A8FF] to-[#00E5FF]">
                  S
                </span>
              </div>
            </div>
            <div className="absolute bottom-1 right-1 px-3 py-1 rounded-full bg-[#00A8FF] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
              Lead Marketer
            </div>
          </div>

          {/* Bio & Details */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-poppins text-2xl font-bold text-white">
              {BRAND.founderName}
            </h3>
            <p className="text-sm font-mono text-[#00E5FF] font-semibold mt-1">
              {BRAND.founderRole}
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#B0BEC5] italic leading-relaxed font-sans">
              "My mission is simple: eliminate wasted advertising budget for Bangladeshi business owners. We build data-backed Meta ad campaigns that deliver predictable customer inquiries and revenue."
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-btn bg-[#071020] text-[#B0BEC5] hover:text-[#00A8FF] border border-[#1A3A5C] text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00A8FF]" />
                <span>{BRAND.email}</span>
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-btn bg-[#071020] text-[#00E5FF] hover:underline border border-[#1A3A5C] text-xs font-semibold transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>{BRAND.instagram}</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
