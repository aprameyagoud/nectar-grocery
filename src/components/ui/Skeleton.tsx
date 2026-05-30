interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = 'w-full h-4' }: SkeletonProps) {
  return <div className={`animate-pulse rounded-2xl bg-gray-200 ${className}`.trim()} />
}