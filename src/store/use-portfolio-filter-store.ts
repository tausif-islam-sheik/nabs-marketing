import { create } from 'zustand';

export type PortfolioCategory = 'all' | 'restaurant' | 'clothing';

interface PortfolioFilterState {
  activeCategory: PortfolioCategory;
  setCategory: (category: PortfolioCategory) => void;
}

export const usePortfolioFilterStore = create<PortfolioFilterState>((set) => ({
  activeCategory: 'all',
  setCategory: (category) => set({ activeCategory: category }),
}));
