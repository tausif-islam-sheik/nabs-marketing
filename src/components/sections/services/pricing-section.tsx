import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, DollarSign, Info } from 'lucide-react';
import { PRICING_TIERS } from '@/lib/constants';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

export function PricingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <SectionHeading
          eyebrow="Transparent Packages"
          eyebrowIcon={DollarSign}
          title="Simple & Fair"
          highlightedTitle="Monthly Pricing"
          description="Straightforward agency management fees. No hidden costs, no surprise charges."
        />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12">
        {PRICING_TIERS.map((tier, idx) => (
          <Reveal key={tier.id} delay={idx * 0.15}>
            <div
              className={`relative h-full flex flex-col justify-between p-8 rounded-card transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-[#0D2137] via-[#0A1628] to-[#0D2137] border-2 border-[#00A8FF] shadow-2xl shadow-[#00A8FF]/30 scale-105 z-10'
                  : 'bg-[#0D2137]/80 border border-[#1A3A5C] hover:border-[#00A8FF]'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00E5FF] text-[#0A1628] font-poppins font-extrabold text-xs uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-poppins text-2xl font-bold text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-[#B0BEC5] leading-relaxed font-sans min-h-[40px]">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-poppins text-4xl sm:text-5xl font-extrabold text-white">
                    {tier.price}
                  </span>
                  <span className="text-[#B0BEC5] text-sm font-mono">{tier.period}</span>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1A3A5C]">
                  <p className="text-xs font-mono font-semibold text-[#00E5FF] uppercase tracking-wider mb-4">
                    What's Included:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white">
                        <div className="w-5 h-5 rounded-full bg-[#69FF47]/10 text-[#69FF47] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6">
                <Link
                  href={tier.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-btn font-poppins font-bold text-sm transition-all duration-300 ${
                    tier.isPopular
                      ? 'bg-[#00A8FF] hover:bg-[#00E5FF] text-white hover:text-[#0A1628] shadow-lg shadow-[#00A8FF]/40 glow-hover'
                      : 'bg-[#071020] hover:bg-[#00A8FF] text-white border border-[#1A3A5C] hover:border-[#00A8FF] glow-hover'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Meta Ad Spend Disclaimer Notice */}
      <div className="mt-12 p-4 rounded-card bg-[#071020]/80 border border-[#1A3A5C] flex items-center gap-3 text-xs sm:text-sm text-[#B0BEC5] max-w-3xl mx-auto">
        <Info className="w-5 h-5 text-[#00E5FF] shrink-0" />
        <span>
          <strong>Note:</strong> Package prices cover NABS agency strategy and management fees. Your advertising budget is paid directly to Meta (Facebook/Instagram) using your own payment method.
        </span>
      </div>
    </section>
  );
}
