import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/Button'
import { useCartStore } from '../../store/cartStore'

export default function OrderSuccessScreen() {
  const navigate = useNavigate()
  const clearCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,190,200,0.35),transparent_30%),radial-gradient(circle_at_top_right,rgba(190,210,255,0.35),transparent_28%),linear-gradient(180deg,#fffafc_0%,#f8fbff_100%)] px-4 py-8 text-textPrimary">
      <div className="absolute left-[12%] top-[23%] h-4 w-4 rounded-full bg-[#5DADE2]" />
      <div className="absolute left-[18%] top-[33%] h-3 w-3 rounded-full bg-[#FFB347]" />
      <div className="absolute right-[17%] top-[20%] h-5 w-5 rounded-full bg-[#5C73FF]" />
      <div className="absolute right-[23%] top-[28%] h-4 w-4 rounded-full bg-[#FF6D4D]" />
      <div className="absolute left-[20%] top-[60%] h-10 w-10 rounded-full border-4 border-[#5C73FF]" />
      <div className="absolute right-[21%] top-[58%] h-10 w-10 rounded-full border-4 border-[#F7B23B]" />
      <div className="absolute left-[28%] top-[18%] h-14 w-1 rounded-full bg-[#5DADE2] rotate-[20deg]" />
      <div className="absolute right-[28%] top-[16%] h-14 w-1 rounded-full bg-[#FF6D4D] -rotate-[20deg]" />

      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center text-center">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-primary shadow-[0_0_0_6px_rgba(76,175,80,0.25)]">
          <span className="text-7xl font-bold leading-none text-white">✓</span>
        </div>

        <h1 className="mt-12 text-4xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-5xl">
          Your Order has been accepted
        </h1>
        <p className="mt-6 text-lg leading-8 text-textSecondary">
          Your items has been placed and is on it&apos;s way to being processed
        </p>

        <div className="mt-24 w-full space-y-4">
          <Button
            onClick={() => navigate('/home')}
            className="rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] hover:bg-primary-dark"
          >
            Track Order
          </Button>

          <button
            type="button"
            onClick={() => navigate('/home')}
            className="text-2xl font-semibold text-textPrimary transition-colors hover:text-primary"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  )
}