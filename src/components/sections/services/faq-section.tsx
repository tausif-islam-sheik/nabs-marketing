'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Reveal>
        <SectionHeading
          eyebrow="Got Questions?"
          eyebrowIcon={HelpCircle}
          title="Frequently Asked"
          highlightedTitle="Questions"
          description="Everything you need to know about working with NABS Marketing and managing Meta ad campaigns."
        />
      </Reveal>

      <div className="mt-8 space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <Reveal key={item.id} delay={idx * 0.08}>
              <div className="rounded-card bg-[#0D2137]/80 border border-[#1A3A5C] overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-poppins text-lg font-semibold text-white hover:text-[#00E5FF] transition-colors focus:outline-none"
                >
                  <span>{item.question}</span>
                  <div className={`p-2 rounded-full bg-[#071020] text-[#00A8FF] transition-transform duration-300 ${isOpen ? 'transform rotate-180 bg-[#00A8FF] text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-[#B0BEC5] text-sm sm:text-base leading-relaxed font-sans border-t border-[#1A3A5C]/40 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
