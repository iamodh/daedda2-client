import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type DelayState = {
  enabled: boolean;
  enable: () => void;
  disable: () => void;
};

export const useDelayStore = create<DelayState>()(
  persist(
    (set) => ({
      enabled: false,
      enable: () => set({ enabled: true }),
      disable: () => set({ enabled: false }),
    }),
    {
      name: 'delay-storage',
    }
  )
);

export const getDelayState = () => useDelayStore.getState();
