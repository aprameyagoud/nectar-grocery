import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/Button'
import FallbackImage from '../../components/ui/FallbackImage'
import { useCartStore } from '../../store/cartStore'
import { CloseIcon, MinusIcon, PlusIcon } from './mainIcons'

function EmptyCartState() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="text-8xl">🛒</div>
      <p className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-textPrimary">Your cart is empty</p>
      <div className="mt-8 w-full max-w-sm">
        <Button onClick={() => navigate('/home')}>
          Start Shopping
        </Button>
      </div>
    </div>
  )
}

export default function CartScreen() {
  const navigate = useNavigate()
  const items = useCartStore((state) => state.items)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const getTotal = useCartStore((state) => state.getTotal)

  const total = useMemo(() => getTotal(), [getTotal, items])

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-4 sm:px-6 lg:px-8 lg:pb-8">
        <h1 className="text-center text-4xl font-semibold tracking-[-0.04em]">My Cart</h1>
        <div className="mt-6 border-t border-border" />

        {items.length === 0 ? (
          <EmptyCartState />
        ) : (
          <div className="mt-2 grid gap-8 lg:grid-cols-[1fr_360px]">
            <section className="divide-y divide-border">
              {items.map((item) => (
                <article key={item.product.id} className="relative flex items-center gap-4 py-8 pr-2 sm:gap-6">
                  <FallbackImage src={item.product.image} fallback={item.product.imageFallback} alt={item.product.name} className="h-20 w-20 object-contain" />

                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-textPrimary">{item.product.name}</h2>
                    <p className="mt-2 text-lg text-textSecondary">{item.product.unit}, Price</p>

                    <div className="mt-6 flex items-center gap-4 sm:gap-5">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-textSecondary transition-colors hover:border-primary hover:text-primary"
                        aria-label={`Decrease ${item.product.name}`}
                      >
                        <MinusIcon className="h-5 w-5" />
                      </button>

                      <span className="min-w-8 text-center text-xl font-semibold text-textPrimary">{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3FA845] bg-gradient-to-b from-[#5FCC66] to-[#3FA845] text-white shadow-[0_10px_20px_rgba(63,168,69,0.28)] ring-1 ring-[#2E7D32]/15 transition-all hover:from-[#56C35D] hover:to-[#368F3C] hover:shadow-[0_12px_22px_rgba(63,168,69,0.36)]"
                        aria-label={`Increase ${item.product.name}`}
                      >
                        <PlusIcon className="h-7 w-7" />
                      </button>

                      <p className="ml-auto text-3xl font-semibold tracking-[-0.03em] text-textPrimary">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="absolute right-0 top-6 inline-flex h-10 w-10 items-center justify-center text-border transition-colors hover:text-textPrimary"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <CloseIcon className="h-7 w-7" />
                  </button>
                </article>
              ))}
            </section>

            <aside className="hidden lg:block">
              <div className="sticky top-6 rounded-[28px] border border-border bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-textPrimary">Order Summary</h2>
                <div className="mt-6 space-y-4 border-t border-border pt-4 text-lg">
                  <div className="flex items-center justify-between text-textSecondary">
                    <span>Items</span>
                    <span>{items.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-textSecondary">
                    <span>Delivery</span>
                    <span>$2.99</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold text-textPrimary">
                    <span>Total</span>
                    <span>${(total + 2.99).toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button onClick={() => navigate('/checkout')}>
                    Go to Checkout
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      {items.length > 0 ? (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white px-4 py-4 lg:hidden">
          <Button onClick={() => navigate('/checkout')} className="relative">
            <span>Go to Checkout</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white">
              ${total.toFixed(2)}
            </span>
          </Button>
        </div>
      ) : null}
    </div>
  )
}