interface QuantitySelectorProps {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

export function QuantitySelector({ quantity, onDecrease, onIncrease }: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-3 py-2">
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-lg font-medium text-textPrimary transition-colors hover:border-primary hover:text-primary"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-6 text-center text-base font-semibold text-textPrimary">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}