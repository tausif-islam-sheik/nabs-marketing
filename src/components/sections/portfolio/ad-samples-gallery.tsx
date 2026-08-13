'use client';

import React, { useState } from 'react';
import { UtensilsCrossed, Shirt, Sparkles, Image as ImageIcon, Maximize2, X } from 'lucide-react';
import { AD_SAMPLES } from '@/lib/constants';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { AdSample } from '@/types';

const iconMap = {
  UtensilsCrossed,
  Shirt,
  Sparkles,
};

export function AdSamplesGallery() {
  const [selectedImage, setSelectedImage] = useState<AdSample | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1A3A5C]">
      <Reveal>
        <SectionHeading
          eyebrow="Visual Excellence"
          eyebrowIcon={ImageIcon}
          title="Ad Design"
          highlightedTitle="Samples"
          description="High-converting visual concepts engineered for Facebook & Instagram feed, story, and reels placements."
        />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {AD_SAMPLES.map((sample, idx) => {
          const Icon = iconMap[sample.icon as keyof typeof iconMap] || Sparkles;

          return (
            <Reveal key={sample.id} delay={idx * 0.1}>
              <div
                onClick={() => sample.image && setSelectedImage(sample)}
                className={`group rounded-card bg-[#0D2137]/90 border border-[#1A3A5C] hover:border-[#00E5FF] transition-all duration-300 overflow-hidden glow-hover cursor-pointer flex flex-col justify-between`}
              >
                {/* Styled Creative Canvas */}
                <div className="w-full aspect-[4/5] bg-[#071020] relative overflow-hidden flex items-center justify-center">
                  {sample.image ? (
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${sample.gradient} p-6 flex flex-col items-center justify-center relative`}>
                      <div className="p-4 rounded-2xl bg-[#071020]/90 text-[#00E5FF] border border-[#00E5FF]/40 shadow-2xl">
                        <Icon className="w-10 h-10" />
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137] via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071020]/90 text-white font-poppins text-[11px] font-semibold tracking-wider border border-white/20 backdrop-blur-sm">
                    {sample.aspectRatio}
                  </span>

                  {/* Click to Enlarge Icon Indicator */}
                  {sample.image && (
                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-[#071020]/80 text-[#00E5FF] border border-[#00E5FF]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Caption below */}
                <div className="p-5 flex items-center justify-between bg-[#0D2137]">
                  <div>
                    <h4 className="font-poppins font-bold text-white text-base group-hover:text-[#00E5FF] transition-colors">
                      {sample.title}
                    </h4>
                    <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider block mt-0.5">
                      {sample.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Full-Screen Image Lightbox Modal */}
      {selectedImage && selectedImage.image && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#071020] border border-[#1A3A5C] rounded-card overflow-hidden flex flex-col items-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#0D2137] text-white hover:text-[#00E5FF] border border-[#1A3A5C] z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto object-contain rounded-md"
            />

            <div className="mt-3 text-center py-2 px-4">
              <h3 className="font-poppins text-lg font-bold text-white">{selectedImage.title}</h3>
              <p className="text-xs font-mono text-[#00E5FF] uppercase">{selectedImage.tag} • {selectedImage.aspectRatio}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
