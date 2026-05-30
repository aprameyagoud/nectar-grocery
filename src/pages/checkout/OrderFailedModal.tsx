import { useEffect, useState } from 'react'

import { Button } from '../../components/ui/Button'
import { useSmartBack } from '../../hooks/useSmartBack'

import { CloseIcon } from '../main/mainIcons'

export function OrderFailedModal({
  onClose,
  onTryAgain,
}: {
  onClose: () => void
  onTryAgain: () => void
}) {
  const goBack = useSmartBack('/cart')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsVisible(true))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`relative w-full max-w-md rounded-3xl bg-white px-6 pb-8 pt-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <button type="button" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Close failure dialog">
          <CloseIcon className="h-8 w-8" />
        </button>

        <div className="mt-2 flex justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#E9F8EF] text-[8rem] leading-none">🛍️</div>
        </div>

        <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-textPrimary">Oops! Order Failed</h2>
        <p className="mt-4 text-lg text-textSecondary">Something went tembly wrong.</p>

        <div className="mt-10">
          <Button
            onClick={onTryAgain}
            className="rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] hover:bg-primary-dark"
          >
            Please Try Again
          </Button>
        </div>

        <button
          type="button"
          onClick={goBack}
          className="mt-6 text-2xl font-semibold text-textPrimary transition-colors hover:text-primary"
        >
          Back to cart
        </button>
      </div>
    </div>
  )
}