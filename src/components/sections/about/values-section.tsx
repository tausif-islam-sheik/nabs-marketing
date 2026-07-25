import React from 'react';
import { Eye, Target, Trophy, Compass } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const values = [
  {
    title: '100% Transparency',
    description: 'We never hide behind confusing jargon or secret account setups. You retain 100% ownership of your ad account and clear access to data.',
    icon: Eye,
  },
  {
    title: 'Results First',
    description: 'We do not celebrate vanity metrics. Every campaign decision is driven by Cost Per Lead (CPL), return on ad spend (ROAS), and profit margins.',
    icon: Target,
  },
  {
    title: 'Client Growth Obsession',
    description: 'Your growth is our growth. We restrict client intake to ensure every restaurant and clothing brand receives dedicated strategy attention.',
    icon: Trophy,
  },
];

export function ValuesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1A3A5C]">
      <Reveal>
        <SectionHeading
          eyebrow="Core Principles"
          eyebrowIcon={Compass}
          title="What We Stand For"
          highlightedTitle="Our Core Values"
          description="The guiding principles behind every ad strategy we build for our partners."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {values.map((val, idx) => {
          const Icon = val.icon;
          return (
            <Reveal key={val.title} delay={idx * 0.12}>
              <div className="h-full p-8 rounded-card glass-card hover:border-[#00A8FF] transition-all duration-300 transform hover:-translate-y-1 glow-hover group">
                <div className="w-14 h-14 rounded-2xl bg-[#00A8FF]/10 text-[#00E5FF] flex items-center justify-center mb-6 group-hover:bg-[#00A8FF] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-poppins text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-[#B0BEC5] leading-relaxed font-sans">
                  {val.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
