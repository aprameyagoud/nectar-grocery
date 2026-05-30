import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/ui/Button'
import { StarRating } from '../../components/ui/StarRating'
import { fetchProducts } from '../../data/products'
import { useCartStore } from '../../store/cartStore'
import { useFavoritesStore } from '../../store/favoritesStore'
import { useSimulatedFetch } from '../../hooks/useSimulatedFetch'
import type { Product } from '../../types'

import {
  BackArrowIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  HeartOutlineIcon,
  MinusIcon,
  PlusIcon,
  ShareIcon,
} from './mainIcons'

function ProductDetailSkeleton() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-4 lg:grid-cols-2 lg:px-8">
      <div className="h-[420px] rounded-[28px] bg-surface" />
      <div className="space-y-5">
        <div className="h-10 w-3/4 rounded-full bg-surface" />
        <div className="h-6 w-1/3 rounded-full bg-surface" />
        <div className="h-16 rounded-2xl bg-surface" />
        <div className="h-28 rounded-2xl bg-surface" />
        <div className="h-12 rounded-2xl bg-surface" />
      </div>
    </div>
  )
}

export default function ProductDetailScreen() {
  const navigate = useNavigate()
  const { id = '' } = useParams<{ id: string }>()
  const { data: fetchedProducts, loading } = useSimulatedFetch(fetchProducts)
  const products = fetchedProducts ?? []
  const addToCart = useCartStore((state) => state.addToCart)
  const isFavorite = useFavoritesStore((state) => state.isFavorite)
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const [quantity, setQuantity] = useState(1)
  const [showDetails, setShowDetails] = useState(true)

  const product: Product | undefined = useMemo(
    () => products.find((item) => item.id === id) ?? products[1],
    [id, products],
  )

  if (loading || !product) {
    return <ProductDetailSkeleton />
  }

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-8">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => navigate(-1)} className="inline-flex h-10 w-10 items-center justify-center text-textPrimary">
            <BackArrowIcon />
          </button>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center text-textPrimary" aria-label="Share product">
            <ShareIcon />
          </button>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-3">
            <div className="flex h-64 items-center justify-center rounded-[28px] bg-surface p-8">
              <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
            </div>
            <div className="flex justify-center gap-2">
              <span className="h-2 w-6 rounded-full bg-primary" />
              <span className="h-2 w-2 rounded-full bg-black/20" />
              <span className="h-2 w-2 rounded-full bg-black/20" />
            </div>
          </div>

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl font-semibold tracking-[-0.04em]">{product.name}</h1>
                <p className="mt-2 text-xl font-medium text-textSecondary">{product.unit}, Price</p>
              </div>
              <button
                type="button"
                onClick={() => toggleFavorite(product)}
                className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                  isFavorite(product.id) ? 'border-primary text-primary' : 'border-border text-textSecondary'
                }`}
                aria-label="Toggle favorite"
              >
                <HeartOutlineIcon className="h-7 w-7" />
              </button>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="text-3xl font-light text-textSecondary">
                  <MinusIcon className="h-5 w-5" />
                </button>
                <div className="flex h-14 w-16 items-center justify-center rounded-2xl border border-border bg-white text-2xl font-semibold text-textPrimary">
                  {quantity}
                </div>
                <button type="button" onClick={() => setQuantity((current) => current + 1)} className="text-primary">
                  <PlusIcon className="h-7 w-7" />
                </button>
              </div>
              <p className="text-3xl font-semibold tracking-[-0.03em]">${(product.price * quantity).toFixed(2)}</p>
            </div>

            <hr className="my-8 border-border" />

            <button type="button" onClick={() => setShowDetails((current) => !current)} className="flex w-full items-center justify-between py-1 text-left">
              <span className="text-2xl font-semibold tracking-[-0.03em]">Product Detail</span>
              <ChevronDownIcon className={`h-6 w-6 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
            </button>
            {showDetails ? <p className="mt-4 text-lg leading-8 text-textSecondary">{product.description}</p> : null}

            <div className="mt-8 flex items-center justify-between border-t border-border py-5">
              <span className="text-2xl font-semibold tracking-[-0.03em]">Nutritions</span>
              <div className="inline-flex items-center gap-3">
                <span className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-textSecondary">100gr</span>
                <ChevronRightIcon className="h-7 w-7 text-textPrimary" />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border py-5">
              <span className="text-2xl font-semibold tracking-[-0.03em]">Review</span>
              <div className="flex items-center gap-3">
                <StarRating rating={product.rating} />
                <ChevronRightIcon className="h-7 w-7 text-textPrimary" />
              </div>
            </div>

            <div className="hidden pt-6 lg:block">
              <Button
                onClick={() => addToCart(product)}
                className="rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] hover:bg-primary-dark"
              >
                Add To Basket
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white px-4 py-4 lg:hidden">
        <Button
          onClick={() => addToCart(product)}
          className="rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] hover:bg-primary-dark"
        >
          Add To Basket
        </Button>
      </div>
    </div>
  )
}