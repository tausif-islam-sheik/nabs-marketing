import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const trustPoints = [
  'Deep specialization in Bangladeshi consumer psychology & local purchasing triggers.',
  'Dedicated ad strategy setup within 7 days of onboarding.',
  'Zero hidden agency fees or unexpected billing surprises.',
  'Direct WhatsApp & Messenger funnels that route leads straight to your sales team.',
  'Weekly transparent analytics breakdowns with actionable recommendations.',
  'Flexible month-to-month management plans with no lock-in contracts.',
];

export function WhyTrustUsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0D2137]/60 rounded-card border border-[#1A3A5C] my-12">
      <Reveal>
        <SectionHeading
          eyebrow="Proven Reliability"
          eyebrowIcon={ShieldCheck}
          title="Why Businesses"
          highlightedTitle="Trust NABS Marketing"
          description="We take full accountability for campaign setup, budget efficiency, and ongoing ad optimization."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto">
        {trustPoints.map((point, idx) => (
          <Reveal key={idx} delay={idx * 0.08}>
            <div className="flex items-start gap-4 p-4 rounded-btn bg-[#071020]/70 border border-[#1A3A5C]/60 hover:border-[#00A8FF]/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-[#69FF47]/10 text-[#69FF47] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-sm sm:text-base text-white font-sans leading-relaxed">
                {point}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
