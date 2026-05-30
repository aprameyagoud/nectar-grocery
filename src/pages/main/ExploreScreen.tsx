import { Link, useNavigate } from 'react-router-dom'

import { Skeleton } from '../../components/ui/Skeleton'
import { fetchCategories } from '../../data/categories'
import { useSimulatedFetch } from '../../hooks/useSimulatedFetch'

import { CarrotSmallIcon, SearchIcon } from './mainIcons'

export default function ExploreScreen() {
  const navigate = useNavigate()
  const { data: fetchedCategories, loading } = useSimulatedFetch(fetchCategories)
  const categories = fetchedCategories ?? []

  return (
    <div className="min-h-screen bg-background px-4 pb-8 pt-4 text-textPrimary sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <CarrotSmallIcon className="h-10 w-10 text-primary" />
        </div>

        <h1 className="mt-6 text-center text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Find Products</h1>

        <button
          type="button"
          onClick={() => navigate('/search')}
          className="mt-8 flex w-full items-center gap-3 rounded-full bg-surface px-5 py-4 text-left text-textSecondary"
        >
          <SearchIcon className="h-6 w-6 text-textPrimary" />
          <span>Search Store</span>
        </button>

        {loading ? (
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-60 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="flex min-h-[220px] flex-col items-center justify-between rounded-2xl border p-5 text-center transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: category.bgColor, borderColor: category.borderColor }}
              >
                <img src={category.image} alt={category.name} className="h-32 w-full object-contain" />
                <p className="mt-4 text-lg font-semibold tracking-[-0.02em] text-textPrimary">
                  {category.id === 'fresh-fruits-vegetables' ? 'Frash Fruits & Vegetable' : category.name}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}