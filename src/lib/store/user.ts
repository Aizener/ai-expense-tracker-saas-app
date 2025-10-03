import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';

interface InsightData {
  id: string;
  type: 'warning' | 'info' | 'success' | 'tip';
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

export const useUser = createStore<{
  hydrated: boolean;
  lastUpdate: number | null;
  userInsights: InsightData[];
  setUserInsights: (userInsights: InsightData[]) => void;
  setLastUpdate: (lastUpdate: number) => void;
}>()(
  persist(
    (set) => ({
      hydrated: false,
      userInsights: [],
      lastUpdate: null,
      setUserInsights: (userInsights: InsightData[]) => set({ userInsights }),
      setLastUpdate: (lastUpdate: number) => set({ lastUpdate }),
    }),
    {
      name: 'user-store',
      partialize: state => ({ userInsights: state.userInsights, lastUpdate: state.lastUpdate }),
      onRehydrateStorage: (state) => {
        state.hydrated = true;
      }
    }
  )
);