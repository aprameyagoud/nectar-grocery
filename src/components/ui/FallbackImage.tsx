import { useState } from 'react'

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

export function FallbackImage({ src, fallback, alt, ...rest }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src as string | undefined)

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={currentSrc}
      alt={alt}
      {...rest}
      onError={(e) => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback)
        } else {
          // clear src to avoid infinite error loop
          setCurrentSrc(undefined)
        }
        if (rest.onError) rest.onError(e as any)
      }}
    />
  )
}

export default FallbackImage
