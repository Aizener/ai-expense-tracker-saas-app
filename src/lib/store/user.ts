import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/generated/prisma/client';

export const useUser = create<{
  user: User | null
}>()(
  persist(
    (set) => ({
      user: null,
      clearUser: () => set({ user: null }),
      setUser: (user: User) => set({ user }),
    }),
    {
      name: 'user-store',
    }
  )
);