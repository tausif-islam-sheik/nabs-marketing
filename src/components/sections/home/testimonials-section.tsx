import React from 'react';
import { Star, MessageSquareQuote, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { TESTIMONIALS } from '@/lib/constants';

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <SectionHeading
          eyebrow="Client Success"
          eyebrowIcon={MessageSquareQuote}
          title="What Our Clients"
          highlightedTitle="Say About Us"
          description="Real feedback from restaurant owners and clothing brand founders across Bangladesh."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item, idx) => (
          <Reveal key={item.id} delay={idx * 0.15}>
            <div className="relative h-full flex flex-col justify-between p-7 rounded-card bg-[#0D2137]/90 border-l-4 border-l-[#00A8FF] border-y border-r border-[#1A3A5C] glow-hover group">
              {/* Quote Mark Background Decorative Glyph */}
              <div className="absolute top-4 right-4 text-[#00A8FF]/10 group-hover:text-[#00A8FF]/20 transition-colors pointer-events-none">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              <div>
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD600] text-[#FFD600]" />
                  ))}
                </div>

                {/* Italic Quote Text */}
                <p className="text-sm sm:text-base text-[#B0BEC5] italic leading-relaxed font-sans relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="mt-8 pt-4 border-t border-[#1A3A5C]">
                <h4 className="font-poppins font-bold text-white text-base">
                  {item.clientName}
                </h4>
                <p className="text-xs text-[#00E5FF] font-medium mt-0.5">
                  {item.businessName}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
