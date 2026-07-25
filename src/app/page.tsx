import React from 'react';
import { HeroSection } from '@/components/sections/home/hero-section';
import { TrustBadgeStrip } from '@/components/shared/trust-badge-strip';
import { SpecializationSection } from '@/components/sections/home/specialization-section';
import { ProcessSection } from '@/components/sections/home/process-section';
import { WhyChooseSection } from '@/components/sections/home/why-choose-section';
import { TestimonialsSection } from '@/components/sections/home/testimonials-section';
import { FinalCtaBanner } from '@/components/sections/home/final-cta-banner';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <TrustBadgeStrip />
      <SpecializationSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FinalCtaBanner />
    </div>
  );
}
