import { create } from 'zustand'

type SortBy = 'price_asc' | 'price_desc' | 'rating' | ''

interface FilterStore {
  selectedCategories: string[]
  selectedBrands: string[]
  sortBy: SortBy
  toggleCategory: (category: string) => void
  toggleBrand: (brand: string) => void
  setSortBy: (sort: string) => void
  clearFilters: () => void
  hasActiveFilters: () => boolean
}

const isSortBy = (sort: string): sort is SortBy =>
  sort === 'price_asc' || sort === 'price_desc' || sort === 'rating' || sort === ''

export const useFilterStore = create<FilterStore>((set, get) => ({
  selectedCategories: [],
  selectedBrands: [],
  sortBy: '',
  toggleCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((item) => item !== category)
        : [...state.selectedCategories, category],
    })),
  toggleBrand: (brand) =>
    set((state) => ({
      selectedBrands: state.selectedBrands.includes(brand)
        ? state.selectedBrands.filter((item) => item !== brand)
        : [...state.selectedBrands, brand],
    })),
  setSortBy: (sort) =>
    set({
      sortBy: isSortBy(sort) ? sort : '',
    }),
  clearFilters: () =>
    set({
      selectedCategories: [],
      selectedBrands: [],
      sortBy: '',
    }),
  hasActiveFilters: () =>
    get().selectedCategories.length > 0 ||
    get().selectedBrands.length > 0 ||
    get().sortBy !== '',
}))