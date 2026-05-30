import { create } from 'zustand'

import type { User } from '../types'

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  phone: string
  setPhone: (phone: string) => void
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  phone: '',
  setPhone: (phone) => set({ phone }),
  login: (user) => set({ user, isAuthenticated: true, phone: user.phone }),
  logout: () => set({ user: null, isAuthenticated: false, phone: '' }),
}))