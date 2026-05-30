import { create } from 'zustand'

import { products } from '../data/products'
import type { Product } from '../types'

const seededFavorites = products.filter((product) =>
  ['sprite-can', 'diet-coke', 'apple-grape-juice', 'coca-cola-can', 'pepsi-can'].includes(product.id),
)

interface FavoritesStore {
  favorites: Product[]
  toggleFavorite: (product: Product) => void
  isFavorite: (productId: string) => boolean
  addAllToCart: () => void
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: seededFavorites,
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