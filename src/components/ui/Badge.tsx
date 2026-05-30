interface BadgeProps {
  count: number
}

export function Badge({ count }: BadgeProps) {
  if (count <= 0) {
    return null
  }

  return (
    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold leading-none text-white">
      {count > 99 ? '99+' : count}
    </span>
  )
}