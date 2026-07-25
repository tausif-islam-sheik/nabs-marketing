import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowIcon: Icon,
  title,
  highlightedTitle,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 md:mb-16', alignmentClass, className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00A8FF]/30 bg-[#00A8FF]/10 text-[#00E5FF] text-xs uppercase tracking-widest font-mono font-medium mb-4">
          {Icon && <Icon className="w-3.5 h-3.5 text-[#00E5FF]" />}
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}{' '}
        {highlightedTitle && (
          <span className="text-[#00A8FF] bg-clip-text text-transparent bg-gradient-to-r from-[#00A8FF] to-[#00E5FF]">
            {highlightedTitle}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#B0BEC5] leading-relaxed font-sans max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
