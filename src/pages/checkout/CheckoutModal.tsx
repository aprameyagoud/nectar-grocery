import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/Button'
import { useCartStore } from '../../store/cartStore'

import { ChevronRightIcon, CloseIcon } from '../main/mainIcons'
import { OrderFailedModal } from './OrderFailedModal'

export function CheckoutModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()
  const clearCart = useCartStore((state) => state.clearCart)
  const total = useCartStore((state) => state.getTotal())
  const [showFailure, setShowFailure] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsVisible(true))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  const handlePlaceOrder = () => {
    if (isPlacingOrder) {
      return
    }

    setIsPlacingOrder(true)

    window.setTimeout(() => {
      const success = Math.random() < 0.9

      if (success) {
        clearCart()
        onClose()
        navigate('/order-success')
      } else {
        setShowFailure(true)
      }

      setIsPlacingOrder(false)
    }, 1500)
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-x-0 bottom-0 z-50 rounded-t-3xl bg-white shadow-[0_-12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 lg:inset-x-auto lg:left-1/2 lg:w-full lg:max-w-xl lg:-translate-x-1/2 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="max-h-[88vh] overflow-y-auto rounded-t-3xl px-5 pb-6 pt-5 sm:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-textPrimary">Checkout</h2>
            <button type="button" onClick={onClose} className="inline-flex h-12 w-12 items-center justify-center text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Close checkout">
              <CloseIcon className="h-8 w-8" />
            </button>
          </div>

          <div className="mt-6 divide-y divide-border border-y border-border">
            <div className="flex items-center justify-between py-5 text-lg">
              <span className="font-medium text-textSecondary">Delivery</span>
              <button type="button" className="inline-flex items-center gap-2 font-semibold text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Select delivery method">
                <span>Select Method</span>
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center justify-between py-5 text-lg">
              <span className="font-medium text-textSecondary">Payment</span>
              <button type="button" className="inline-flex items-center gap-2 font-semibold text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Select payment method">
                <span className="inline-flex h-6 items-center gap-[-4px] justify-center">
                  <span className="h-4 w-4 rounded-full bg-[#EC1C24]" />
                  <span className="-ml-1 h-4 w-4 rounded-full bg-[#F79E1B] opacity-90" />
                </span>
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center justify-between py-5 text-lg">
              <span className="font-medium text-textSecondary">Promo Code</span>
              <button type="button" className="inline-flex items-center gap-2 font-semibold text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Pick discount">
                <span>Pick discount</span>
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center justify-between py-5 text-lg">
              <span className="font-medium text-textSecondary">Total Cost</span>
              <button type="button" className="inline-flex items-center gap-2 font-semibold text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary" aria-label={`Total cost ${total.toFixed(2)}`}>
                <span>${total.toFixed(2)}</span>
                <ChevronRightIcon className="h-6 w-6" />
              </button>
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
    </>
  )
}