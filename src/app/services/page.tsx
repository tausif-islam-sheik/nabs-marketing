import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { TrustBadgeStrip } from '@/components/shared/trust-badge-strip';
import { ServicesList } from '@/components/sections/services/services-list';
import { PricingSection } from '@/components/sections/services/pricing-section';
import { FaqSection } from '@/components/sections/services/faq-section';
import { FinalCtaBanner } from '@/components/sections/home/final-cta-banner';
import { GlowOrb } from '@/components/shared/glow-orb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Pricing | NABS Marketing – Meta Ads Agency Bangladesh',
  description: 'Explore our Facebook & Instagram ad services, transparent monthly management packages, and client FAQ. Tailored for Restaurants and Clothing Brands.',
};

export default function ServicesPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* Page Hero Banner (280-320px height) */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D2137] to-[#0A1628] border-b border-[#1A3A5C] dot-grid">
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-2 text-xs font-mono text-[#B0BEC5] mb-4">
            <Link href="/" className="hover:text-[#00A8FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1A3A5C]" />
            <span className="text-[#00E5FF] font-semibold">Services</span>
          </nav>

          <h1 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-[#00A8FF]">Services & Pricing</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#B0BEC5] max-w-2xl mx-auto font-sans">
            Comprehensive Facebook & Instagram ad solutions engineered to maximize customer acquisition and monthly revenue.
          </p>
        </div>
      </section>

      <TrustBadgeStrip />
      <ServicesList />
      <PricingSection />
      <FaqSection />
      <FinalCtaBanner
        title="Ready to Scale Your Ad Performance?"
        subTitle="Choose your management plan or request a custom quote. Let's discuss your revenue targets today."
        buttonText="Get Your Free Strategy Session"
      />
    </div>
  );
}
