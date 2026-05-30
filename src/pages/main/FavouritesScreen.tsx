import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/Button'
import { useCartStore } from '../../store/cartStore'
import { useFavoritesStore } from '../../store/favoritesStore'

import { ChevronRightIcon } from './mainIcons'

export default function FavouritesScreen() {
  const navigate = useNavigate()
  const favorites = useFavoritesStore((state) => state.favorites)
  const addAllToCart = useFavoritesStore((state) => state.addAllToCart)
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className="min-h-screen bg-background px-4 pb-8 pt-4 text-textPrimary sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col">
        <h1 className="text-center text-4xl font-semibold tracking-[-0.04em]">Favouruite</h1>
        <div className="mt-6 border-t border-border" />

        {favorites.length === 0 ? (
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <p className="text-7xl">♡</p>
            <p className="mt-6 text-2xl font-semibold tracking-[-0.03em]">No favourites yet</p>
            <div className="mt-8 w-full max-w-sm">
              <Button onClick={() => navigate('/explore')} className="rounded-full bg-primary py-4 text-lg font-semibold text-white hover:bg-primary-dark">
                Explore Products
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-2 divide-y divide-border">
            {favorites.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex items-center gap-4 py-8 pr-2 transition-colors hover:bg-surface/40"
              >
                <img src={product.image} alt={product.name} className="h-16 w-16 object-contain" />
                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-2xl font-semibold tracking-[-0.03em] text-textPrimary">{product.name}</h2>
                  <p className="mt-2 text-lg text-textSecondary">{product.unit}, Price</p>
                </div>
                <div className="flex items-center gap-4 text-2xl font-medium text-textPrimary">
                  <span>${product.price.toFixed(2)}</span>
                  <ChevronRightIcon className="h-8 w-8 text-textPrimary" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {favorites.length > 0 ? (
          <div className="mt-10">
            <Button
              onClick={() => {
                favorites.forEach((product) => addToCart(product))
                addAllToCart()
                navigate('/cart')
              }}
              className="rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] hover:bg-primary-dark"
            >
              Add All To Cart
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}