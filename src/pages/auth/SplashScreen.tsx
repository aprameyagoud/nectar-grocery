import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CarrotIcon } from './authIcons'

export default function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate('/onboarding')
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary text-white">
      <div className="flex flex-col items-center gap-4 text-center">
        <CarrotIcon className="h-16 w-16 text-white" />
        <div className="space-y-1">
          <h1 className="text-5xl font-semibold tracking-[-0.04em]">nectar</h1>
          <p className="text-sm tracking-[0.35em] text-white/90">online groceriet</p>
        </div>
      </div>
    </div>
  )
}