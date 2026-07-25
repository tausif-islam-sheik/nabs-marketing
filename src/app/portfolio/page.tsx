import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PortfolioStats } from '@/components/sections/portfolio/portfolio-stats';
import { PortfolioGrid } from '@/components/sections/portfolio/portfolio-grid';
import { AdSamplesGallery } from '@/components/sections/portfolio/ad-samples-gallery';
import { StarterNoticeBanner } from '@/components/sections/portfolio/starter-notice-banner';
import { FinalCtaBanner } from '@/components/sections/home/final-cta-banner';
import { GlowOrb } from '@/components/shared/glow-orb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | NABS Marketing',
  description: 'View real campaign performance benchmarks, reach metrics, and ad creative design samples for Bangladeshi Restaurants and Fashion Brands.',
};

export default function PortfolioPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* Page Hero Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D2137] to-[#0A1628] border-b border-[#1A3A5C] dot-grid">
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <nav className="inline-flex items-center gap-2 text-xs font-mono text-[#B0BEC5] mb-4">
            <Link href="/" className="hover:text-[#00A8FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1A3A5C]" />
            <span className="text-[#00E5FF] font-semibold">Portfolio</span>
          </nav>

          <h1 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-[#00A8FF]">Work & Case Studies</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#B0BEC5] max-w-2xl mx-auto font-sans">
            Real campaign blueprints, audience reach data, and ad design samples tailored for Restaurants & Clothing Brands.
          </p>
        </div>
      </section>

      <PortfolioStats />
      <PortfolioGrid />
      <AdSamplesGallery />
      <StarterNoticeBanner />
      <FinalCtaBanner
        title="Ready to Become Our Next Success Story?"
        subTitle="Let us turn your Facebook & Instagram ad campaigns into a predictable revenue stream."
        buttonText="Get Your Free Consultation Now"
      />
    </div>
  );
}
