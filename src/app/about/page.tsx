import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { StorySection } from '@/components/sections/about/story-section';
import { ValuesSection } from '@/components/sections/about/values-section';
import { WhyTrustUsSection } from '@/components/sections/about/why-trust-us-section';
import { FounderSection } from '@/components/sections/about/founder-section';
import { FinalCtaBanner } from '@/components/sections/home/final-cta-banner';
import { GlowOrb } from '@/components/shared/glow-orb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | NABS Marketing – Performance Ads Agency',
  description: 'Learn about NABS Marketing, our core values, why Bangladeshi businesses trust us, and meet founder Sojib.',
};

export default function AboutPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* Page Hero Banner (280px height) */}
      <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D2137] to-[#0A1628] border-b border-[#1A3A5C] dot-grid">
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <nav className="inline-flex items-center gap-2 text-xs font-mono text-[#B0BEC5] mb-4">
            <Link href="/" className="hover:text-[#00A8FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1A3A5C]" />
            <span className="text-[#00E5FF] font-semibold">About</span>
          </nav>

          <h1 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            We Are <span className="text-[#00A8FF]">NABS Marketing</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#B0BEC5] max-w-2xl mx-auto font-sans">
            Where Ads Meet Revenue. Dedicated Facebook & Instagram performance marketing for Bangladeshi Restaurants and Fashion Brands.
          </p>
        </div>
      </section>

      <StorySection />
      <ValuesSection />
      <WhyTrustUsSection />
      <FounderSection />
      <FinalCtaBanner
        title="Ready to Scale Your Brand With Us?"
        subTitle="Let's build a targeted Meta ad strategy for your business today."
        buttonText="Start The Conversation"
      />
    </div>
  );
}
