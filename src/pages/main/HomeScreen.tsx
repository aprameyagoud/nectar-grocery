import { Link, useNavigate } from 'react-router-dom'

import { ProductCard } from '../../components/ui/ProductCard'
import { Skeleton } from '../../components/ui/Skeleton'
import { fetchCategories, localCategories } from '../../data/categories'
import { fetchProducts } from '../../data/products'
import { useSimulatedFetch } from '../../hooks/useSimulatedFetch'
import type { Category, Product } from '../../types'
import bannerMain from '../../assets/home screen banner.png'
import logo from '../../assets/logo.png'

import {
  LocationPinIcon,
  SearchIcon,
} from './mainIcons'
import { useEffect, useState } from 'react'

const groceryPills = [
  { label: 'Pulses', image: new URL('../../assets/pulses.png', import.meta.url).href, bg: '#F9E9D5' },
  { label: 'Rice', image: new URL('../../assets/rice.png', import.meta.url).href, bg: '#E4F1E9' },
  { label: 'Flour', image: new URL('../../assets/bakery and snck.png', import.meta.url).href, bg: '#F1E6FB' },
  { label: 'Oil', image: new URL('../../assets/cooking oil.png', import.meta.url).href, bg: '#FFF0E2' },
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
    <aside className="hidden w-64 shrink-0 rounded-[28px] border border-border bg-white p-5 shadow-sm lg:block self-start max-h-[80vh] overflow-auto lg:sticky lg:top-8">
      <h2 className="text-lg font-semibold text-textPrimary">Categories</h2>
      <div className="mt-4 space-y-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="min-w-0 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-textSecondary transition-colors hover:bg-primary/5 hover:text-primary"
          >
            <span className="truncate">{category.name}</span>
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

function CategoryPill({ label, image, bg, to }: { label: string; image: string; bg: string; to: string }) {
  return (
    <Link
      to={to}
      className="flex min-w-[160px] items-center gap-3 rounded-[22px] px-4 py-4 text-left shadow-sm md:min-w-0"
      style={{ backgroundColor: bg }}
    >
      <img src={image} alt={label} className="h-16 w-16 rounded-2xl object-cover" />
      <span className="text-lg font-medium text-textPrimary">{label}</span>
    </Link>
  )
}

export default function HomeScreen() {
  const navigate = useNavigate()
  const [isLarge, setIsLarge] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)')
    const onChange = (e: MediaQueryListEvent) => setIsLarge(e.matches)
    // For older browsers that don't support addEventListener on MediaQueryList
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange)
    } else {
      // @ts-ignore
      mql.addListener(onChange)
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange)
      } else {
        // @ts-ignore
        mql.removeListener(onChange)
      }
    }
  }, [])
  const { data: fetchedCategories, loading: categoriesLoading } = useSimulatedFetch(fetchCategories)
  const { data: fetchedProducts, loading: productsLoading } = useSimulatedFetch(fetchProducts)

  const categories = fetchedCategories ?? localCategories
  const products = fetchedProducts ?? []
  const exclusive = products.slice(0, 4)
  const bestSelling = products.slice(8, 12)
  const gridProducts = products.slice(12, 20)

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 pb-8 pt-4 sm:px-6 lg:px-8">
          {isLarge && <CategorySidebar categories={categories} />}

        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-3xl lg:max-w-none">
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <img src={logo} alt="Nectar logo" className="h-10 w-10" draggable={false} />
              <div className="flex items-center gap-2 text-lg font-medium text-textSecondary">
                <LocationPinIcon className="h-5 w-5" />
                <span>Panaji, Goa</span>
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

            <section className="relative mx-auto mt-6 overflow-hidden rounded-[28px] border border-[#F2F3F2] bg-white shadow-[0_18px_50px_rgba(84,131,50,0.16)] aspect-[760/220] min-h-[180px] md:min-h-[220px]">
              <img
                src={bannerMain}
                alt="Fresh vegetables and produce"
                className="absolute inset-0 h-full w-full object-cover object-center"
                draggable={false}
              />
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
                      <CategoryPill key={pill.label} {...pill} to="/explore" />
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