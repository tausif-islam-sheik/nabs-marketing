'use client';

import React from 'react';
import { BRAND } from '@/lib/constants';

function WhatsAppIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.926 0-3.812-.519-5.467-1.503l-.392-.233-4.062 1.065 1.084-3.96-.256-.407a10.849 10.849 0 0 1-1.66-5.836c0-5.992 4.876-10.867 10.87-10.867 2.903 0 5.632 1.13 7.682 3.183a10.8 10.8 0 0 1 3.18 7.686c0 5.993-4.877 10.868-10.871 10.868m0-20.007c-6.84 0-12.408 5.568-12.408 12.408 0 2.186.569 4.318 1.65 6.189l-1.754 6.406 6.556-1.718a12.372 12.372 0 0 0 5.956 1.53h.005c6.839 0 12.407-5.568 12.407-12.408 0-3.314-1.291-6.427-3.636-8.772a12.33 12.33 0 0 0-8.776-3.635 font-normal" />
    </svg>
  );
}

export function WhatsAppFloatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip on hover */}
      <div className="mr-3 px-3 py-1.5 rounded-md bg-[#0D2137] text-white text-xs font-poppins font-medium shadow-xl border border-[#1A3A5C] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:block">
        Chat with us on WhatsApp
      </div>

      {/* Button wrapper with pulsing ring */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NABS Marketing on WhatsApp"
        className="relative flex items-center justify-center w-[60px] h-[60px] md:w-[68px] md:h-[68px] rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/50 hover:scale-110 transition-transform duration-300 focus:outline-none"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
        <WhatsAppIcon className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
