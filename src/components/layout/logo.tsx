import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'icon' | 'full';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Brand Logo Image Emblem */}
      <div className="relative overflow-hidden rounded-xl border border-[#00A8FF]/40 group-hover:border-[#00E5FF] transition-all duration-300 shadow-lg shadow-[#00A8FF]/20 group-hover:shadow-[#00E5FF]/40 shrink-0">
        <img
          src="/nabs-logo.jpg"
          alt="NABS Marketing"
          className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span className="font-poppins font-black text-2xl tracking-tight text-white leading-none group-hover:text-[#00E5FF] transition-colors">
              NABS
            </span>
            <span className="text-[#00A8FF] font-black text-2xl leading-none">.</span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase font-bold mt-0.5">
            Marketing
          </span>
        </div>
      )}
    </Link>
  );
}
