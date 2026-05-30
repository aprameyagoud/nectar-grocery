import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/Button'

import { CloseIcon } from '../main/mainIcons'

export function OrderFailedModal({
  onClose,
  onTryAgain,
}: {
  onClose: () => void
  onTryAgain: () => void
}) {
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white px-6 pb-8 pt-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
        <button type="button" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center text-textPrimary" aria-label="Close failure dialog">
          <CloseIcon className="h-8 w-8" />
        </button>

        <div className="mt-2 flex justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#E9F8EF] text-[8rem] leading-none">🛍️</div>
        </div>

        <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-textPrimary">Oops! Order Failed</h2>
        <p className="mt-4 text-lg text-textSecondary">Something went terribly wrong.</p>

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
          onClick={() => navigate('/home')}
          className="mt-6 text-2xl font-semibold text-textPrimary transition-colors hover:text-primary"
        >
          Back to home
        </button>
      </div>
    </div>
  )
}