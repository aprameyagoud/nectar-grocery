import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/Button'
import { useCartStore } from '../../store/cartStore'

import { OrderFailedModal } from './OrderFailedModal'
import { ChevronRightIcon, CloseIcon } from '../main/mainIcons'

export default function CheckoutScreen() {
  const navigate = useNavigate()
  const clearCart = useCartStore((state) => state.clearCart)
  const total = useCartStore((state) => state.getTotal())
  const [showFailure, setShowFailure] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)

  const handlePlaceOrder = () => {
    if (isPlacingOrder) return

    setIsPlacingOrder(true)

    window.setTimeout(() => {
      const success = Math.random() < 0.9

      if (success) {
        clearCart()
        navigate('/order-success')
      } else {
        setShowFailure(true)
      }

      setIsPlacingOrder(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-background px-4 py-4 text-textPrimary sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => navigate('/cart')} className="inline-flex h-10 w-10 items-center justify-center text-textPrimary" aria-label="Close checkout">
            <CloseIcon className="h-8 w-8" />
          </button>
          <h1 className="text-3xl font-semibold tracking-[-0.04em]">Checkout</h1>
          <span className="h-10 w-10" />
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm">
          <div className="divide-y divide-border border-y border-border">
            <div className="flex items-center justify-between py-5 text-lg">
              <span className="font-medium text-textSecondary">Delivery</span>
              <button type="button" className="inline-flex items-center gap-2 font-semibold text-textPrimary" aria-label="Select delivery method">
                <span>Select Method</span>
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center justify-between py-5 text-lg">
              <span className="font-medium text-textSecondary">Payment</span>
              <button type="button" className="inline-flex items-center gap-2 font-semibold text-textPrimary" aria-label="Select payment method">
                <span>Payment Method</span>
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center justify-between py-5 text-lg">
              <span className="font-medium text-textSecondary">Promo Code</span>
              <button type="button" className="inline-flex items-center gap-2 font-semibold text-textPrimary" aria-label="Pick discount">
                <span>Pick discount</span>
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center justify-between py-5 text-lg">
              <span className="font-medium text-textSecondary">Total Cost</span>
              <span className="font-semibold text-textPrimary">${total.toFixed(2)}</span>
            </div>
          </div>

          <p className="mt-6 text-base leading-7 text-textSecondary">
            By placing an order you agree to our <span className="font-semibold text-textPrimary">Terms And Conditions</span>
          </p>

          <div className="mt-6">
            <Button
              onClick={handlePlaceOrder}
            >
              {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
            </Button>
          </div>
        </div>
      </div>

      {showFailure ? (
        <OrderFailedModal
          onClose={() => setShowFailure(false)}
          onTryAgain={() => {
            setShowFailure(false)
            handlePlaceOrder()
          }}
        />
      ) : null}
    </div>
  )
}