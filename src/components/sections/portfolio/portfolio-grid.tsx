'use client';

import React from 'react';
import { UtensilsCrossed, Shirt, Eye, TrendingUp, DollarSign, Tag } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { usePortfolioFilterStore, PortfolioCategory } from '@/store/use-portfolio-filter-store';
import { Reveal } from '@/components/shared/reveal';

const categories: { label: string; value: PortfolioCategory }[] = [
  { label: 'All Results', value: 'all' },
  { label: 'Restaurants', value: 'restaurant' },
  { label: 'Clothing Brands', value: 'clothing' },
];

export function PortfolioGrid() {
  const { activeCategory, setCategory } = usePortfolioFilterStore();

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-6 py-2.5 rounded-full font-poppins text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-[#00A8FF] text-white shadow-lg shadow-[#00A8FF]/30 scale-105'
                  : 'bg-[#0D2137] text-[#B0BEC5] border border-[#1A3A5C] hover:border-[#00A8FF] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Case Study Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item, idx) => {
          const isRestaurant = item.category === 'restaurant';
          const Icon = isRestaurant ? UtensilsCrossed : Shirt;
          const bgGradient = isRestaurant
            ? 'from-[#0D2137] via-[#1A3A5C] to-[#0A1628]'
            : 'from-[#0D2137] via-[#00A8FF]/20 to-[#0A1628]';

          return (
            <Reveal key={item.id} delay={idx * 0.1}>
              {/* Note for Sojib: isSampleData = true indicating placeholder case study */}
              <div className="h-full flex flex-col justify-between rounded-card bg-[#0D2137]/80 border border-[#1A3A5C] hover:border-[#00A8FF] transition-all duration-300 overflow-hidden glow-hover group">
                {/* Visual Header Block */}
                <div className="w-full h-64 bg-[#071020] border-b border-[#1A3A5C] relative overflow-hidden flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${bgGradient} flex flex-col items-center justify-center p-6 relative`}>
                      <div className="p-4 rounded-2xl bg-[#071020]/80 text-[#00E5FF] border border-[#00A8FF]/30 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Icon className="w-10 h-10" />
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay for Tag Clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137] via-transparent to-black/30 pointer-events-none" />

                  {/* Category Label */}
                  <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-[#071020]/90 text-[#00E5FF] font-mono text-[11px] font-bold border border-[#00E5FF]/30 backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>

                  {/* Sample Data Indicator Tag */}
                  {item.isSampleData && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#071020]/90 text-[#FFD600] font-mono text-[10px] font-bold border border-[#FFD600]/30 backdrop-blur-sm">
                      Sample Case Study
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#B0BEC5] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* 3 Metric Badges */}
                  <div className="mt-6 pt-4 border-t border-[#1A3A5C] grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-btn bg-[#071020] border border-[#1A3A5C]">
                      <div className="flex items-center justify-center gap-1 text-[#00E5FF] mb-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono font-bold uppercase">Reach</span>
                      </div>
                      <span className="font-poppins text-xs font-bold text-white">
                        {item.reach}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-btn bg-[#071020] border border-[#1A3A5C]">
                      <div className="flex items-center justify-center gap-1 text-[#69FF47] mb-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono font-bold uppercase">Results</span>
                      </div>
                      <span className="font-poppins text-xs font-bold text-white">
                        {item.leadsOrSales}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-btn bg-[#071020] border border-[#1A3A5C]">
                      <div className="flex items-center justify-center gap-1 text-[#FFD600] mb-1">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono font-bold uppercase">Budget</span>
                      </div>
                      <span className="font-poppins text-xs font-bold text-white">
                        {item.adSpend}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
