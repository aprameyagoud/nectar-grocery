import { Link, useNavigate } from 'react-router-dom'

import { ProductCard } from '../../components/ui/ProductCard'
import { Skeleton } from '../../components/ui/Skeleton'
import { fetchCategories } from '../../data/categories'
import { fetchProducts } from '../../data/products'
import { useSimulatedFetch } from '../../hooks/useSimulatedFetch'
import type { Category, Product } from '../../types'
import heroImage from '../../assets/hero.png'

import {
  CarrotSmallIcon,
  LocationPinIcon,
  SearchIcon,
} from './mainIcons'

const groceryPills = [
  { label: 'Pulses', image: 'https://loremflickr.com/160/90/lentils', bg: '#F9E9D5' },
  { label: 'Rice', image: 'https://loremflickr.com/160/90/rice', bg: '#E4F1E9' },
  { label: 'Flour', image: 'https://loremflickr.com/160/90/flour', bg: '#F1E6FB' },
  { label: 'Oil', image: 'https://loremflickr.com/160/90/olive-oil', bg: '#FFF0E2' },
]

function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
      <Skeleton className="h-32 w-full rounded-xl" />
      <Skeleton className="mt-4 h-5 w-3/4 rounded-full" />
      <Skeleton className="mt-2 h-4 w-1/2 rounded-full" />
      <div className="mt-4 flex items-end justify-between">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-10 w-10 rounded-xl" />
      </div>
    </div>
  )
}

function CategorySidebar({ categories }: { categories: Category[] }) {
  return (
    <aside className="hidden w-64 shrink-0 rounded-[28px] border border-border bg-white p-5 shadow-sm lg:block">
      <h2 className="text-lg font-semibold text-textPrimary">Categories</h2>
      <div className="mt-4 space-y-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-textSecondary transition-colors hover:bg-primary/5 hover:text-primary"
          >
            <span>{category.name}</span>
            <span className="text-primary">›</span>
          </Link>
        ))}
      </div>
    </aside>
  )
}

function HorizontalProductRail({ items }: { items: Product[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-1 md:grid md:grid-cols-4 md:overflow-visible">
      {items.map((product) => (
        <div key={product.id} className="min-w-[168px] flex-shrink-0 md:min-w-0">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

function CategoryPill({ label, image, bg }: { label: string; image: string; bg: string }) {
  return (
    <button
      type="button"
      className="flex min-w-[160px] items-center gap-3 rounded-[22px] px-4 py-4 text-left shadow-sm md:min-w-0"
      style={{ backgroundColor: bg }}
    >
      <img src={image} alt={label} className="h-16 w-16 rounded-2xl object-cover" />
      <span className="text-lg font-medium text-textPrimary">{label}</span>
    </button>
  )
}

export default function HomeScreen() {
  const navigate = useNavigate()
  const { data: fetchedCategories, loading: categoriesLoading } = useSimulatedFetch(fetchCategories)
  const { data: fetchedProducts, loading: productsLoading } = useSimulatedFetch(fetchProducts)

  const categories = fetchedCategories ?? []
  const products = fetchedProducts ?? []
  const exclusive = products.slice(0, 4)
  const bestSelling = products.slice(8, 12)
  const gridProducts = products.slice(12, 20)

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <CategorySidebar categories={categories} />

        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-3xl lg:max-w-none">
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <CarrotSmallIcon className="h-10 w-10 text-primary" />
              <div className="flex items-center gap-2 text-lg font-medium text-textSecondary">
                <LocationPinIcon className="h-5 w-5" />
                <span>Dhaka, Banassre</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/search')}
              className="mt-5 flex w-full items-center gap-3 rounded-full bg-surface px-5 py-4 text-left text-textSecondary transition-colors hover:bg-[#ececec]"
            >
              <SearchIcon className="h-6 w-6 text-textPrimary" />
              <span>Search Store</span>
            </button>

            <section className="mt-6 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#F4FFE9_0%,#D7F0C8_35%,#A8E08E_100%)] p-5 shadow-sm md:min-h-[220px] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="max-w-[55%] space-y-2 md:max-w-md">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-textPrimary md:text-4xl">Fresh Vegetables</p>
                  <p className="text-sm font-medium text-primary-dark md:text-lg">Get Up To 40% OFF</p>
                </div>
                <img
                  src={heroImage}
                  alt="Fresh vegetables and produce"
                  className="h-28 w-28 rounded-2xl object-cover md:h-40 md:w-40"
                />
              </div>
              <div className="mt-6 flex justify-center gap-2">
                <span className="h-2 w-6 rounded-full bg-primary" />
                <span className="h-2 w-2 rounded-full bg-black/20" />
                <span className="h-2 w-2 rounded-full bg-black/20" />
              </div>
            </section>

            {productsLoading ? (
              <section className="mt-8">
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))}
                </div>
              </section>
            ) : (
              <>
                <section className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold tracking-[-0.03em]">Exclusive Offer</h2>
                    <Link to="/explore" className="text-base font-medium text-primary">
                      See all
                    </Link>
                  </div>
                  <div className="mt-4 lg:hidden">
                    <HorizontalProductRail items={exclusive} />
                  </div>
                  <div className="mt-4 hidden lg:block">
                    <div className="grid grid-cols-4 gap-4">
                      {exclusive.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </section>

                <section className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold tracking-[-0.03em]">Best Selling</h2>
                    <Link to="/explore" className="text-base font-medium text-primary">
                      See all
                    </Link>
                  </div>
                  <div className="mt-4 lg:hidden">
                    <HorizontalProductRail items={bestSelling} />
                  </div>
                  <div className="mt-4 hidden lg:block">
                    <div className="grid grid-cols-4 gap-4">
                      {bestSelling.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </section>

                <section className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold tracking-[-0.03em]">Groceries</h2>
                    <Link to="/explore" className="text-base font-medium text-primary">
                      See all
                    </Link>
                  </div>
                  <div className="mt-4 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
                    {groceryPills.map((pill) => (
                      <CategoryPill key={pill.label} {...pill} />
                    ))}
                  </div>
                </section>

                <section className="mt-8 pb-10">
                  <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                    {gridProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>

                <section className="mt-10 hidden lg:block">
                  <div className="grid grid-cols-4 gap-4">
                    {categoriesLoading
                      ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-24 rounded-[22px]" />)
                      : categories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/category/${category.id}`}
                            className="rounded-[22px] border px-5 py-4 text-base font-medium"
                            style={{ backgroundColor: category.bgColor, borderColor: category.borderColor }}
                          >
                            {category.name}
                          </Link>
                        ))}
                  </div>
                </section>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}