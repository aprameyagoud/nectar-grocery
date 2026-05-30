import { Link, useNavigate, useParams } from 'react-router-dom'

import { ProductCard } from '../../components/ui/ProductCard'
import { Skeleton } from '../../components/ui/Skeleton'
import { fetchCategories } from '../../data/categories'
import { fetchProductsByCategory } from '../../data/products'
import { useFilterStore } from '../../store/filterStore'
import { useSimulatedFetch } from '../../hooks/useSimulatedFetch'
import { useSmartBack } from '../../hooks/useSmartBack'
import { filterProducts } from '../../utils/productFilters'
import { ProductCategory, type Product } from '../../types'

import { BackArrowIcon, FilterIcon } from './mainIcons'

const categoryLookup: Record<string, ProductCategory> = {
  beverages: ProductCategory.BEVERAGES,
  'fresh-fruits-vegetables': ProductCategory.FRUITS_VEG,
  'cooking-oil-ghee': ProductCategory.COOKING_OIL,
  'meat-fish': ProductCategory.MEAT_FISH,
  'bakery-snacks': ProductCategory.BAKERY_SNACKS,
  'dairy-eggs': ProductCategory.DAIRY_EGGS,
}

function CategorySkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="h-[330px] rounded-2xl" />
      ))}
    </div>
  )
}

export default function CategoryScreen() {
  const navigate = useNavigate()
  const goBack = useSmartBack('/explore')
  const { id = 'beverages' } = useParams<{ id: string }>()
  const routeCategory = categoryLookup[id] ?? ProductCategory.BEVERAGES
  const { data: fetchedCategories } = useSimulatedFetch(fetchCategories)
  const { data: fetchedProducts, loading } = useSimulatedFetch(() => fetchProductsByCategory(routeCategory), [routeCategory])
  const categories = fetchedCategories ?? []
  const products = fetchedProducts ?? []
  const filters = useFilterStore((state) => ({
    selectedCategories: state.selectedCategories,
    selectedBrands: state.selectedBrands,
    sortBy: state.sortBy,
  }))

  const categoryName = categories.find((category) => category.id === id)?.name ?? routeCategory
  const filteredProducts: Product[] = filterProducts(products, {
    category: routeCategory,
    selectedCategories: filters.selectedCategories,
    selectedBrands: filters.selectedBrands,
    sortBy: filters.sortBy,
  })

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <aside className="hidden w-72 shrink-0 rounded-[28px] border border-border bg-white p-5 shadow-sm lg:block">
          <h2 className="text-lg font-semibold text-textPrimary">Categories</h2>
          <div className="mt-4 space-y-2">
            {categories.map((category) => {
              const isActive = category.id === id

              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-textSecondary hover:bg-surface hover:text-textPrimary'
                  }`}
                >
                  <span>{category.name}</span>
                  <span>›</span>
                </Link>
              )
            })}
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="flex items-center justify-between px-1 py-2 lg:hidden">
            <button type="button" aria-label="Go back" onClick={goBack} className="inline-flex h-10 w-10 items-center justify-center text-textPrimary">
              <BackArrowIcon />
            </button>
            <h1 className="text-2xl font-semibold tracking-[-0.03em]">{categoryName}</h1>
            <button type="button" aria-label="Open filters" onClick={() => navigate('/filters')} className="inline-flex h-10 w-10 items-center justify-center text-textPrimary">
              <FilterIcon />
            </button>
          </div>

          <div className="hidden items-center justify-between pb-6 lg:flex">
            <h1 className="text-4xl font-semibold tracking-[-0.04em]">{categoryName}</h1>
            <button type="button" aria-label="Open filters" onClick={() => navigate('/filters')} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-textPrimary">
              <FilterIcon />
              <span>Filters</span>
            </button>
          </div>

          {loading ? (
            <CategorySkeleton />
          ) : (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}