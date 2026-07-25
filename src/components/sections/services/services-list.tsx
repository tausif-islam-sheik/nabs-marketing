import React from 'react';
import Link from 'next/link';
import { Megaphone, Users, Settings2, Check, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '@/components/shared/instagram-icon';
import { SERVICES } from '@/lib/constants';
import { Reveal } from '@/components/shared/reveal';

const iconMap = {
  Megaphone,
  Instagram: InstagramIcon,
  Users,
  Settings2,
};

export function ServicesList() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {SERVICES.map((service, idx) => {
        const Icon = iconMap[service.iconName as keyof typeof iconMap] || Megaphone;

        return (
          <Reveal key={service.id} delay={idx * 0.1}>
            <div
              id={service.id}
              className="p-8 sm:p-10 rounded-card glass-card border-l-4 border-l-transparent hover:border-l-[#00A8FF] transition-all duration-300 glow-hover group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Left Side: Icon & Copy */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-btn bg-[#00A8FF]/10 text-[#00E5FF] group-hover:bg-[#00A8FF] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full bg-[#00A8FF]/20 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider border border-[#00A8FF]/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-poppins text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[#B0BEC5] text-base leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Right CTA */}
                <div className="shrink-0">
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-[#00A8FF] hover:bg-[#00E5FF] text-white hover:text-[#0A1628] font-poppins font-bold text-sm transition-all shadow-md glow-hover"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Feature Checklist (6 items) */}
              <div className="mt-8 pt-6 border-t border-[#1A3A5C] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#69FF47]/10 text-[#69FF47] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-white font-sans">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
