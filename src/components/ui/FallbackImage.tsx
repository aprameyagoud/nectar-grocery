import { useState } from 'react'

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

export function FallbackImage({ src, fallback, alt, ...rest }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src as string | undefined)
  const resolvedSrc = currentSrc && currentSrc.length > 0 ? currentSrc : fallback

  if (!resolvedSrc) {
    return null
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={resolvedSrc}
      alt={alt}
      {...rest}
      onError={(e) => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback)
        } else {
          setCurrentSrc(undefined)
        }
        if (rest.onError) rest.onError(e as any)
      }}
    />
  )
}

export default FallbackImage
