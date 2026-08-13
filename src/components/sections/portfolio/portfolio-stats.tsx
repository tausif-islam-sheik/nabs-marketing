import React from 'react';
import { StatItem } from '@/components/shared/stat-item';

import { TRUST_STATS } from '@/lib/constants';

export function PortfolioStats() {
  const stats = [
    ...TRUST_STATS,
    { value: '2', label: 'Niche Focus Areas' },
  ];
  return (
    <div className="w-full bg-[#071020] border-y border-[#1A3A5C] py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#1A3A5C]">
        {stats.map((stat) => (
          <div key={stat.label} className="pt-4 lg:pt-0">
            <StatItem value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
    </div>
  );
}
