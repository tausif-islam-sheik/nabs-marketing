import React from 'react';
import { Crosshair, LineChart, FileText, Sparkles, MapPin, Zap, ShieldAlert } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const features = [
  {
    title: 'Laser-Sharp Targeting',
    description: 'We pinpoint exact buyer demographics, geotargeting radiuses, and interest clusters to ensure zero wasted ad impressions.',
    icon: Crosshair,
  },
  {
    title: 'Data-Driven Decisions',
    description: 'No guesswork. We continuously analyze Click-Through Rates (CTR) and Cost Per Lead (CPL) to double down on winning creatives.',
    icon: LineChart,
  },
  {
    title: 'Transparent Reporting',
    description: '100% honesty. You receive straightforward performance reports detailing reach, leads, ad spend, and cost per acquisition.',
    icon: FileText,
  },
  {
    title: 'AI-Powered Strategy',
    description: 'We leverage AI audience modeling and ad copy testing frameworks to stay ahead of Meta algorithm updates.',
    icon: Sparkles,
  },
  {
    title: 'Bangladesh Market Expert',
    description: 'Deep, localized insight into Bangladeshi consumer behavior, seasonal purchasing spikes, and local payment methods.',
    icon: MapPin,
  },
  {
    title: 'Fast Results',
    description: 'Our streamlined onboarding gets your campaigns live within 48 to 72 hours, generating early traction in week one.',
    icon: Zap,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal>
        <SectionHeading
          eyebrow="Why NABS"
          eyebrowIcon={ShieldAlert}
          title="Why Choose"
          highlightedTitle="NABS Marketing"
          description="We combine technical Meta Ads mastery with deep local market knowledge to maximize return on ad spend."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          const isEven = idx % 2 === 0;
          const iconColor = isEven ? 'text-[#00A8FF]' : 'text-[#00E5FF]';
          const iconBg = isEven ? 'bg-[#00A8FF]/10' : 'bg-[#00E5FF]/10';

          return (
            <Reveal key={feature.title} delay={idx * 0.1}>
              <div className="h-full p-6 rounded-card glass-card hover:border-[#00A8FF] transition-all duration-300 transform hover:-translate-y-1 glow-hover group">
                <div className={`w-12 h-12 rounded-btn ${iconBg} ${iconColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-poppins text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#B0BEC5] leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
