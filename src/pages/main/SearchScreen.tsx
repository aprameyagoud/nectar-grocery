import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProductCard } from '../../components/ui/ProductCard'
import { Skeleton } from '../../components/ui/Skeleton'
import { fetchProducts } from '../../data/products'
import { useFilterStore } from '../../store/filterStore'
import { useDebounce } from '../../hooks/useDebounce'
import { useSimulatedFetch } from '../../hooks/useSimulatedFetch'
import { filterProducts } from '../../utils/productFilters'

import { CloseIcon, FilterIcon, SearchIcon } from './mainIcons'

function SearchSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="h-[330px] rounded-2xl" />
      ))}
    </div>
  )
}

export default function SearchScreen() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('Egg')
  const debouncedQuery = useDebounce(query, 300)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { data: fetchedProducts, loading } = useSimulatedFetch(fetchProducts)
  const products = fetchedProducts ?? []
  const selectedCategories = useFilterStore((state) => state.selectedCategories)
  const selectedBrands = useFilterStore((state) => state.selectedBrands)
  const sortBy = useFilterStore((state) => state.sortBy)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const results = useMemo(
    () =>
      filterProducts(products, {
        query: debouncedQuery,
        selectedCategories,
        selectedBrands,
        sortBy,
      }),
    [debouncedQuery, products, selectedBrands, selectedCategories, sortBy],
  )

  return (
    <div className="min-h-screen bg-background px-4 pb-8 pt-4 text-textPrimary sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 rounded-full bg-surface px-4 py-4">
          <SearchIcon className="h-6 w-6 text-textPrimary" />
          <input
            ref={inputRef}
            id="search-store"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Store"
            aria-label="Search Store"
            className="w-full bg-transparent text-lg text-textPrimary outline-none placeholder:text-textSecondary"
          />
          {query ? (
            <button type="button" onClick={() => setQuery('')} className="text-textSecondary transition-colors hover:text-textPrimary" aria-label="Clear search">
              <CloseIcon className="h-6 w-6" />
            </button>
          ) : null}
          <button type="button" onClick={() => navigate('/filters')} className="text-textPrimary transition-colors hover:text-primary" aria-label="Open filters">
            <FilterIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8">
          {loading ? (
            <SearchSkeleton />
          ) : results.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-[28px] border border-border bg-white text-center">
              <p className="text-5xl">🔍</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">No products found for '{query}'</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}