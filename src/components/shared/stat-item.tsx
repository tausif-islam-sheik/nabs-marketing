import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <span className="font-poppins text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00A8FF] tracking-tight">
        {value}
      </span>
      <span className="mt-1.5 text-xs md:text-sm font-medium text-[#B0BEC5] uppercase tracking-wider font-mono">
        {label}
      </span>
    </div>
  );
}
