import React from 'react';
import { PhoneCall, Target, Rocket, BarChart3, Workflow } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    description: 'We review your business goals, target audience, current ad account status, and monthly growth targets.',
    icon: PhoneCall,
  },
  {
    num: '02',
    title: 'Strategy & Setup',
    description: 'We craft your custom campaign offer, write compelling ad copy, build audience segments, and configure Meta Pixel.',
    icon: Target,
  },
  {
    num: '03',
    title: 'Campaign Launch',
    description: 'We publish high-performing ad creatives across Facebook & Instagram with precise geotargeting.',
    icon: Rocket,
  },
  {
    num: '04',
    title: 'Optimize & Report',
    description: 'We track ad performance daily, reallocate budget to winning creatives, and provide clear ROI reports.',
    icon: BarChart3,
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1628] to-[#0D2137] border-y border-[#1A3A5C]/60">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            eyebrowIcon={Workflow}
            title="How It Works"
            highlightedTitle="In 4 Simple Steps"
            description="From initial strategy call to active revenue growth, our seamless onboarding gets your ads live in under 7 days."
          />
        </Reveal>

        {/* Process Steps Grid */}
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Dashed Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-[#00A8FF]/40 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} delay={idx * 0.15}>
                <div className="relative z-10 flex flex-col items-center text-center group">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#00A8FF] text-white font-poppins font-extrabold text-xl flex items-center justify-center shadow-lg shadow-[#00A8FF]/30 group-hover:scale-110 group-hover:bg-[#00E5FF] group-hover:text-[#0A1628] transition-all duration-300">
                    {step.num}
                  </div>

                  <div className="mt-6 p-6 rounded-card bg-[#071020]/70 border border-[#1A3A5C] group-hover:border-[#00A8FF] transition-all w-full flex-1 flex flex-col items-center">
                    <div className="p-3 rounded-full bg-[#00A8FF]/10 text-[#00E5FF] mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-poppins text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B0BEC5] leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
