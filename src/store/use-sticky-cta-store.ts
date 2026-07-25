import { create } from 'zustand';

interface StickyCtaState {
  isDismissed: boolean;
  dismissCta: () => void;
}

export const useStickyCtaStore = create<StickyCtaState>((set) => ({
  isDismissed: false,
  dismissCta: () => set({ isDismissed: true }),
}));
