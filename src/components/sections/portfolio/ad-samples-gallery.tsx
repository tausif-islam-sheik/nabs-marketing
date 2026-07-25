import React from 'react';
import { UtensilsCrossed, Shirt, Sparkles, Image as ImageIcon } from 'lucide-react';
import { AD_SAMPLES } from '@/lib/constants';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const iconMap = {
  UtensilsCrossed,
  Shirt,
  Sparkles,
};

export function AdSamplesGallery() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1A3A5C]">
      <Reveal>
        <SectionHeading
          eyebrow="Visual Excellence"
          eyebrowIcon={ImageIcon}
          title="Ad Design"
          highlightedTitle="Samples"
          description="High-converting visual concepts engineered for Facebook & Instagram feed, story, and reels placements."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {AD_SAMPLES.map((sample, idx) => {
          const Icon = iconMap[sample.icon as keyof typeof iconMap] || Sparkles;

          return (
            <Reveal key={sample.id} delay={idx * 0.12}>
              <div className="group rounded-card bg-[#0D2137]/90 border border-[#1A3A5C] hover:border-[#00E5FF] transition-all duration-300 overflow-hidden glow-hover">
                {/* Styled Mock Creative Canvas */}
                <div
                  className={`w-full aspect-[4/3] bg-gradient-to-br ${sample.gradient} p-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300`}
                >
                  <div className="p-4 rounded-2xl bg-[#071020]/90 text-[#00E5FF] border border-[#00E5FF]/40 shadow-2xl">
                    <Icon className="w-10 h-10" />
                  </div>
                  <span className="mt-3 px-3 py-1 rounded-full bg-[#071020]/80 text-white font-poppins text-xs font-semibold tracking-wider">
                    {sample.aspectRatio}
                  </span>
                </div>

                {/* Caption below */}
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-poppins font-bold text-white text-base group-hover:text-[#00E5FF] transition-colors">
                      {sample.title}
                    </h4>
                    <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider">
                      {sample.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
