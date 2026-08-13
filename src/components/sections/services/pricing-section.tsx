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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-12">
        {PRICING_TIERS.map((tier, idx) => (
          <Reveal key={tier.id} delay={idx * 0.1}>
            <div
              className={`relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-card transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-[#0D2137] via-[#0A1628] to-[#0D2137] border-2 border-[#00A8FF] shadow-2xl shadow-[#00A8FF]/30 lg:-translate-y-2 z-10'
                  : 'bg-[#0D2137]/80 border border-[#1A3A5C] hover:border-[#00A8FF]'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#00E5FF] text-[#0A1628] font-poppins font-extrabold text-[11px] uppercase tracking-widest shadow-md whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono font-bold text-[#00E5FF] tracking-wide">
                    "{tier.subtitle}"
                  </span>
                  <h3 className="font-poppins text-xl sm:text-2xl font-bold text-white">
                    {tier.name}
                  </h3>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#B0BEC5] leading-relaxed font-sans min-h-[42px]">
                  {tier.description}
                </p>

                {/* Price block */}
                <div className="mt-5 pt-4 border-t border-[#1A3A5C]/60 flex flex-col gap-1">
                  <div className="flex items-baseline flex-wrap gap-1.5">
                    <span className="font-poppins text-2xl sm:text-3xl font-extrabold text-white">
                      {tier.price}
                    </span>
                    <span className="text-[#B0BEC5] text-xs font-mono">{tier.period}</span>
                  </div>
                  {tier.minAdSpend && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 text-[11px] font-mono font-semibold w-fit mt-1">
                      <span>Min. Ad Spend: <strong>{tier.minAdSpend}</strong></span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-[#1A3A5C]">
                  <p className="text-[11px] font-mono font-semibold text-[#00A8FF] uppercase tracking-wider mb-3">
                    What's Included:
                  </p>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
                        <div className="w-4 h-4 rounded-full bg-[#69FF47]/10 text-[#69FF47] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5">
                <Link
                  href={tier.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-5 rounded-btn font-poppins font-bold text-xs sm:text-sm transition-all duration-300 ${
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
