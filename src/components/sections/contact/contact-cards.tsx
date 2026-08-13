import React from 'react';
import { Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '@/components/shared/instagram-icon';
import { BRAND } from '@/lib/constants';

function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.926 0-3.812-.519-5.467-1.503l-.392-.233-4.062 1.065 1.084-3.96-.256-.407a10.849 10.849 0 0 1-1.66-5.836c0-5.992 4.876-10.867 10.87-10.867 2.903 0 5.632 1.13 7.682 3.183a10.8 10.8 0 0 1 3.18 7.686c0 5.993-4.877 10.868-10.871 10.868m0-20.007c-6.84 0-12.408 5.568-12.408 12.408 0 2.186.569 4.318 1.65 6.189l-1.754 6.406 6.556-1.718a12.372 12.372 0 0 0 5.956 1.53h.005c6.839 0 12.407-5.568 12.407-12.408 0-3.314-1.291-6.427-3.636-8.772a12.33 12.33 0 0 0-8.776-3.635" />
    </svg>
  );
}

export function ContactCards() {
  return (
    <div className="space-y-6">
      {/* Response-time Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD600]/10 text-[#FFD600] border border-[#FFD600]/30 text-xs font-mono font-semibold uppercase tracking-wider">
        <Clock className="w-4 h-4 text-[#FFD600]" />
        <span>Fastest Response Option</span>
      </div>

      {/* WhatsApp CTA Card (Rich Dark-Emerald Gradient & Glow) */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-7 rounded-card bg-gradient-to-br from-[#062E1B] via-[#0A472A] to-[#041F12] border-2 border-[#25D366]/50 hover:border-[#25D366] text-white transition-all duration-300 shadow-xl shadow-[#25D366]/20 hover:shadow-2xl hover:shadow-[#25D366]/40 glow-hover group relative overflow-hidden"
      >
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] group-hover:scale-105 transition-transform">
              <WhatsAppIcon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#25D366] font-bold">
                Instant Chat
              </span>
              <h4 className="font-poppins text-xl sm:text-2xl font-extrabold text-white">
                Chat on WhatsApp
              </h4>
            </div>
          </div>
          <ArrowRight className="w-6 h-6 text-[#25D366] transform group-hover:translate-x-2 transition-transform" />
        </div>
        <p className="mt-4 text-xs font-sans text-[#B0BEC5] leading-relaxed relative z-10">
          Replies usually within 1 hour during business hours • Direct line to Founder Sojib
        </p>
      </a>

      {/* Instagram DM Card (Deep Luxury Violet-Rose Gradient & Glow) */}
      <a
        href={BRAND.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 rounded-card bg-gradient-to-br from-[#2D0B3D] via-[#4A0E35] to-[#1E0729] border-2 border-[#E1306C]/50 hover:border-[#E1306C] text-white transition-all duration-300 shadow-xl shadow-[#E1306C]/20 hover:shadow-2xl hover:shadow-[#E1306C]/40 glow-hover group relative overflow-hidden"
      >
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#E1306C]/20 border border-[#E1306C]/40 text-[#FF4081] group-hover:scale-105 transition-transform">
              <InstagramIcon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF4081] font-bold">
                Social DM
              </span>
              <h4 className="font-poppins text-lg font-bold text-white">
                DM Us on Instagram
              </h4>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-[#FF4081] transform group-hover:translate-x-1.5 transition-transform" />
        </div>
        <p className="mt-3 text-xs text-[#B0BEC5] relative z-10">
          {BRAND.instagram} • View our latest client ad previews
        </p>
      </a>

      {/* Email & Phone Cards Stack (1 Column) */}
      <div className="grid grid-cols-1 gap-4">
        {/* Email Card */}
        <a
          href={`mailto:${BRAND.email}`}
          className="p-5 rounded-card bg-[#0D2137]/90 border border-[#1A3A5C] hover:border-[#00A8FF] transition-all text-white glow-hover"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-btn bg-[#00A8FF]/10 text-[#00A8FF] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#B0BEC5] uppercase tracking-wider block">Email Us</span>
              <span className="text-sm sm:text-base font-poppins font-bold text-white block">
                {BRAND.email}
              </span>
            </div>
          </div>
        </a>

        {/* Phone Call Card */}
        <a
          href={`tel:${BRAND.phone}`}
          className="p-5 rounded-card bg-[#0D2137]/90 border border-[#1A3A5C] hover:border-[#00A8FF] transition-all text-white glow-hover"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-btn bg-[#00E5FF]/10 text-[#00E5FF] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#B0BEC5] uppercase tracking-wider block">Call Direct</span>
              <span className="text-sm sm:text-base font-poppins font-bold text-white block">
                {BRAND.phone}
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Business Hours Box */}
      <div className="p-4 rounded-card bg-[#071020]/90 border border-[#1A3A5C] text-xs text-[#B0BEC5] space-y-1">
        <div className="flex items-center gap-2 font-mono font-semibold text-white">
          <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>Business Hours</span>
        </div>
        <p className="font-sans text-xs">{BRAND.businessHours}</p>
      </div>
    </div>
  );
}
