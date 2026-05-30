import { create } from 'zustand'

import type { Order } from '../types'

interface OrderStore {
  currentOrder: Order | null
  setOrder: (order: Order) => void
  clearOrder: () => void
}

export const useOrderStore = create<OrderStore>((set) => ({
  currentOrder: null,
  setOrder: (order) => set({ currentOrder: order }),
  clearOrder: () => set({ currentOrder: null }),
}))