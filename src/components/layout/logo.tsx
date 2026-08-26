import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'icon' | 'full';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center group focus:outline-none ${className}`}>
      <img
        src="/nabs-logo-transparent.png"
        alt="NABS Marketing"
        className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
