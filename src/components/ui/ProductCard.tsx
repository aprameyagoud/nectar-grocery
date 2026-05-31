import { Link } from 'react-router-dom'

import { useCartStore } from '../../store/cartStore'
import type { Product } from '../../types'
import FallbackImage from './FallbackImage'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <Link
      to={`/product/${product.id}`}
      className="flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div className="flex h-32 items-center justify-center overflow-hidden rounded-xl bg-surface">
        <FallbackImage src={product.image} fallback={product.imageFallback} alt={product.name} className="h-32 w-full object-contain p-3" />
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-textPrimary">{product.name}</h3>
          <p className="text-xs text-textSecondary">{product.unit}, Price</p>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-lg font-semibold text-textPrimary">${product.price.toFixed(2)}</p>
            {!product.inStock ? <p className="text-xs text-textSecondary">Out of stock</p> : null}
          </div>

          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              addToCart(product)
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-b from-[#5FCC66] to-[#3FA845] p-2 text-white shadow-[0_10px_18px_rgba(63,168,69,0.28)] ring-1 ring-[#2E7D32]/15 transition-all hover:from-[#56C35D] hover:to-[#368F3C] hover:shadow-[0_12px_22px_rgba(63,168,69,0.36)]"
          >
            +
          </button>
        </div>
      </div>
    </Link>
  )
}