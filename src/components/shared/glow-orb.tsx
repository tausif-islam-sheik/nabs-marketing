import React from 'react';
import { cn } from '@/lib/utils';

interface GlowOrbProps {
  className?: string;
  size?: string;
  color?: string;
  opacity?: string;
}

export function GlowOrb({
  className,
  size = 'w-[400px] h-[400px]',
  color = 'bg-[#00A8FF]',
  opacity = 'opacity-[0.08]',
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute pointer-events-none rounded-full blur-3xl -z-10 transform-gpu',
        size,
        color,
        opacity,
        className
      )}
    />
  );
}
