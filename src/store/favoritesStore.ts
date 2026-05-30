import { create } from 'zustand'

import type { Product } from '../types'

interface FavoritesStore {
  favorites: Product[]
  toggleFavorite: (product: Product) => void
  isFavorite: (productId: string) => boolean
  addAllToCart: () => void
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],
  toggleFavorite: (product) =>
    set((state) => {
      const exists = state.favorites.some((favorite) => favorite.id === product.id)

      return {
        favorites: exists
          ? state.favorites.filter((favorite) => favorite.id !== product.id)
          : [...state.favorites, product],
      }
    }),
  isFavorite: (productId) => get().favorites.some((favorite) => favorite.id === productId),
  addAllToCart: () => {},
}))