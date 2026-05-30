import { useEffect, useState } from 'react'

export function useSimulatedFetch<T>(
  fetcher: () => Promise<T>,
  dependencies: React.DependencyList = [],
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isActive = true

    const load = async () => {
      setLoading(true)
      setError(null)

      try {
        if (Math.random() < 0.1) {
          throw new Error('A simulated network error occurred.')
        }

        const result = await fetcher()

        if (!isActive) {
          return
        }

        setData(result)
      } catch (caughtError) {
        if (!isActive) {
          return
        }

        setError(caughtError instanceof Error ? caughtError.message : 'Something went wrong.')
        setData(null)
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    void load()

    return () => {
      isActive = false
    }
  }, [fetcher, ...dependencies])

  return { data, loading, error }
}