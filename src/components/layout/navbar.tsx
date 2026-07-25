'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './logo';
import { NAV_LINKS } from '@/lib/constants';
import { useMobileMenuStore } from '@/store/use-mobile-menu-store';

export function Navbar() {
  const pathname = usePathname();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenuStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-[#1A3A5C] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Desktop / Mobile Brand Logo */}
        <Logo variant="full" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-poppins font-semibold transition-colors ${
                  isActive ? 'text-[#00A8FF]' : 'text-[#B0BEC5] hover:text-[#00A8FF]'
                }`}
              >
                {link.title}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00A8FF] to-[#00E5FF] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-btn bg-[#00A8FF] hover:bg-[#00E5FF] text-white hover:text-[#0A1628] font-poppins font-semibold text-sm transition-all duration-300 shadow-md shadow-[#00A8FF]/25 hover:shadow-lg hover:shadow-[#00E5FF]/40 glow-hover"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-btn bg-[#0D2137] text-white border border-[#1A3A5C] hover:border-[#00A8FF] transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6 text-[#00A8FF]" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu Overlay Sheet */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[#071020]/95 backdrop-blur-xl z-40 flex flex-col p-6 border-b border-[#1A3A5C] animate-in fade-in duration-200">
          <nav className="flex flex-col gap-5 mt-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-lg font-poppins font-semibold py-3 px-4 rounded-btn border transition-all ${
                    isActive
                      ? 'bg-[#00A8FF]/10 text-[#00A8FF] border-[#00A8FF]/30'
                      : 'text-white border-transparent hover:bg-[#0D2137] hover:text-[#00E5FF]'
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#1A3A5C]">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-btn bg-[#00A8FF] text-white font-poppins font-bold text-base shadow-lg shadow-[#00A8FF]/30"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
