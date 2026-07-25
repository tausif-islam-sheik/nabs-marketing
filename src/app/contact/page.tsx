import React from 'react';
import Link from 'next/link';
import { ChevronRight, Clock } from 'lucide-react';
import { ContactForm } from '@/components/sections/contact/contact-form';
import { ContactCards } from '@/components/sections/contact/contact-cards';
import { GlowOrb } from '@/components/shared/glow-orb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | NABS Marketing – Free Ad Strategy Consultation',
  description: 'Get in touch with NABS Marketing for a free Facebook & Instagram ad consultation for your Restaurant or Fashion Brand. Quick response on WhatsApp.',
};

export default function ContactPage() {
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
            <span className="text-[#00E5FF] font-semibold">Contact</span>
          </nav>

          <h1 className="font-poppins text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Grow Your <span className="text-[#00A8FF]">Business</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#B0BEC5] max-w-2xl mx-auto font-sans">
            Ready for ads that generate real revenue? Fill out the inquiry form or chat directly with Founder Sojib on WhatsApp.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A8FF]/10 border border-[#00A8FF]/30 text-[#00E5FF] text-xs font-mono font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>Guaranteed 24-hour response window</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Responsive flex-col-reverse on mobile so ContactCards appears FIRST on mobile! */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-10">
          {/* Left Column: Form (55% / 7 cols) */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Contact Cards (45% / 5 cols) */}
          <div className="md:col-span-5">
            <ContactCards />
          </div>
        </div>
      </section>
    </div>
  );
}
