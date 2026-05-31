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
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-[#5FCC66] to-[#3FA845] text-lg font-semibold text-white shadow-[0_8px_16px_rgba(63,168,69,0.24)] ring-1 ring-[#2E7D32]/15 transition-all hover:from-[#56C35D] hover:to-[#368F3C] hover:shadow-[0_10px_18px_rgba(63,168,69,0.32)]"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}