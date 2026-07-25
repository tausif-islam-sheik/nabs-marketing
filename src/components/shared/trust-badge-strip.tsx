import React from 'react';
import { ShieldCheck, BadgeCheck, Clock, MapPin } from 'lucide-react';

const iconsMap = {
  ShieldCheck,
  BadgeCheck,
  Clock,
  MapPin,
};

import { TRUST_BADGES } from '@/lib/constants';

export function TrustBadgeStrip() {
  return (
    <div className="w-full bg-[#0D2137]/80 backdrop-blur-md border-y border-[#1A3A5C] py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {TRUST_BADGES.map((badge) => {
          const IconComponent = iconsMap[badge.iconName as keyof typeof iconsMap] || ShieldCheck;
          return (
            <div
              key={badge.id}
              className="flex items-start gap-3 p-3 rounded-card bg-[#071020]/50 border border-[#1A3A5C]/40 glow-hover"
            >
              <div className="p-2 rounded-btn bg-[#00A8FF]/10 text-[#00E5FF] shrink-0 mt-0.5">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-poppins text-sm font-semibold text-white leading-tight">
                  {badge.title}
                </h4>
                <p className="text-xs text-[#B0BEC5] mt-1 font-sans leading-normal">
                  {badge.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
