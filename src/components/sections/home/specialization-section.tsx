import React from 'react';
import Link from 'next/link';
import { UtensilsCrossed, Shirt, Check, ArrowRight, Target } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

export function SpecializationSection() {
  return (
    <section id="specialize" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <SectionHeading
          eyebrow="Niche Expertise"
          eyebrowIcon={Target}
          title="We Specialize In"
          highlightedTitle="2 Core Industries"
          description="We do not offer generic marketing for everyone. We focus exclusively on two high-demand industries in Bangladesh to deliver unbeatable campaign performance."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Restaurants */}
        <Reveal delay={0.1}>
          <div className="h-full flex flex-col justify-between p-8 rounded-card glass-card hover:border-[#00A8FF] transition-all duration-300 transform hover:-translate-y-1 glow-hover group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#00A8FF]/10 text-[#00E5FF] flex items-center justify-center border border-[#00A8FF]/20 group-hover:bg-[#00A8FF] group-hover:text-white transition-colors duration-300">
                <UtensilsCrossed className="w-7 h-7" />
              </div>

              <h3 className="mt-6 font-poppins text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                Restaurants & Cafes
              </h3>

              <p className="mt-3 text-[#B0BEC5] text-sm leading-relaxed font-sans">
                Drive consistent foot traffic and table reservations. Hyper-local targeting within a 3–7 km radius around your location ensures your mouth-watering dishes reach hungry foodies nearby.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Hyper-local geotargeting for immediate foot traffic',
                  'High-converting video reels & food carousel ads',
                  'Instant Messenger & WhatsApp table booking funnels',
                  'Weekend & festival promo campaign acceleration',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white">
                    <div className="w-5 h-5 rounded-full bg-[#69FF47]/10 text-[#69FF47] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1A3A5C]">
              <Link
                href="/services#restaurant"
                className="inline-flex items-center gap-2 text-sm font-poppins font-semibold text-[#00A8FF] group-hover:text-[#00E5FF] transition-colors"
              >
                <span>Explore Restaurant Ad Solutions</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Card 2: Clothing Brands */}
        <Reveal delay={0.2}>
          <div className="h-full flex flex-col justify-between p-8 rounded-card glass-card hover:border-[#00A8FF] transition-all duration-300 transform hover:-translate-y-1 glow-hover group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center border border-[#00E5FF]/20 group-hover:bg-[#00E5FF] group-hover:text-[#0A1628] transition-colors duration-300">
                <Shirt className="w-7 h-7" />
              </div>

              <h3 className="mt-6 font-poppins text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                Clothing & Fashion Brands
              </h3>

              <p className="mt-3 text-[#B0BEC5] text-sm leading-relaxed font-sans">
                Scale your online fashion sales with visual carousel ads, automated direct messaging checkout funnels, and lookalike targeting designed for fashion buyers across Bangladesh.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Catalogue carousel & outfit video ad showcases',
                  'Audience demographic refinement by age & interest',
                  'Direct Messenger & Instagram DM sales funnels',
                  'Festive & seasonal collection launch strategies',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white">
                    <div className="w-5 h-5 rounded-full bg-[#69FF47]/10 text-[#69FF47] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1A3A5C]">
              <Link
                href="/services#clothing"
                className="inline-flex items-center gap-2 text-sm font-poppins font-semibold text-[#00A8FF] group-hover:text-[#00E5FF] transition-colors"
              >
                <span>Explore Clothing Ad Solutions</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
