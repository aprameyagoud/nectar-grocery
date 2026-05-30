import { useNavigate } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { useSmartBack } from '../hooks/useSmartBack'

export default function OrderFailureScreen() {
  const navigate = useNavigate()
  const goBack = useSmartBack('/cart')

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,214,214,0.35),transparent_35%),linear-gradient(180deg,#fff7f7_0%,#fffdfc_100%)] px-4 py-8 text-textPrimary">
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center text-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#FFE3E3] text-7xl shadow-[0_0_0_6px_rgba(255,99,99,0.14)]">
          🛍️
        </div>

        <h1 className="mt-12 text-4xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-5xl">Oops! Order Failed</h1>
        <p className="mt-6 text-lg leading-8 text-textSecondary">Something went wrong while placing your order.</p>

        <div className="mt-24 w-full space-y-4">
          <Button onClick={() => navigate('/cart')} className="rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] hover:bg-primary-dark">
            Try Again
          </Button>

          <button type="button" onClick={goBack} className="text-2xl font-semibold text-textPrimary transition-colors hover:text-primary">
            Back to cart
          </button>
        </div>
      </div>
    </div>
  )
}