import { useNavigate } from 'react-router-dom'

import type { Product } from '../../types'
import FallbackImage from './FallbackImage'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/product/${product.id}`)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          navigate(`/product/${product.id}`)
        }
      }}
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
            aria-label={`Add ${product.name}`}
            onClick={(event) => event.stopPropagation()}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary p-2 text-white transition-colors hover:bg-primary-dark"
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}