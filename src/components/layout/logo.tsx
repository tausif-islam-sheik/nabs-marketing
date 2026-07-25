import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'icon' | 'full';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Brand Mark Icon */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A8FF] via-[#00E5FF] to-[#0D2137] p-[1.5px] shadow-lg shadow-[#00A8FF]/20 group-hover:shadow-[#00A8FF]/40 transition-all">
        <div className="w-full h-full bg-[#0A1628] rounded-[10.5px] flex items-center justify-center">
          <span className="font-poppins font-black text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00A8FF] to-[#00E5FF]">
            N
          </span>
        </div>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="font-poppins font-extrabold text-xl tracking-tight text-white leading-none">
            NABS<span className="text-[#00A8FF]">.</span>
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#00E5FF] uppercase font-semibold mt-1">
            Marketing
          </span>
        </div>
      )}
    </Link>
  );
}
