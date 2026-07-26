import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { InstagramIcon } from '@/components/shared/instagram-icon';
import { Logo } from './logo';
import { BRAND, NAV_LINKS } from '@/lib/constants';

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#071020] border-t border-[#1A3A5C] text-[#B0BEC5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <Logo variant="full" />
            <p className="text-[#00E5FF] italic font-poppins text-sm font-medium">
              "{BRAND.tagline}"
            </p>
            <p className="text-sm text-[#B0BEC5] leading-relaxed max-w-sm">
              We turn Facebook & Instagram ads into reliable revenue for Bangladeshi Restaurants & Clothing Brands.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-poppins text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 mt-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B0BEC5] hover:text-[#00A8FF] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="flex flex-col gap-3">
            <h3 className="font-poppins text-base font-bold text-white uppercase tracking-wider">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3.5 mt-1">
              <li>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-[#25D366] hover:underline font-semibold"
                >
                  <div className="p-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span>WhatsApp: {BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-3 text-sm text-[#B0BEC5] hover:text-white transition-colors"
                >
                  <div className="p-2 rounded-full bg-[#0D2137] border border-[#1A3A5C]">
                    <Mail className="w-4 h-4 text-[#00A8FF]" />
                  </div>
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-[#00E5FF] hover:underline"
                >
                  <div className="p-2 rounded-full bg-[#0D2137] border border-[#1A3A5C]">
                    <InstagramIcon className="w-4 h-4 text-[#00E5FF]" />
                  </div>
                  <span>{BRAND.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-6 border-t border-[#1A3A5C]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B0BEC5] pr-20 md:pr-24">
          <p>© {new Date().getFullYear()} NABS Marketing. All Rights Reserved.</p>
          <p className="text-[#00E5FF] font-medium">{BRAND.tagline}</p>
          <p>Developed by <a href="https://www.facebook.com/tausifislamsheik" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#00A8FF] transition-colors">TAUSIF ISLAM SHEIK</a></p>
        </div>
      </div>
    </footer>
  );
}
