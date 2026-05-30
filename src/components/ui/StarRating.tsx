interface StarRatingProps {
  rating: number
}

export function StarRating({ rating }: StarRatingProps) {
  const filledStars = Math.max(0, Math.min(5, Math.round(rating)))

  return (
    <span className="inline-flex items-center gap-0.5 text-sm text-[#F8A23A]" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < filledStars ? '★' : '☆'}</span>
      ))}
    </span>
  )
}