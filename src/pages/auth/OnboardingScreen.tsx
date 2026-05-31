import { useNavigate } from 'react-router-dom'

import onboardingImage from '../../assets/onboarding.png'
import { Button } from '../../components/ui/Button'

import { CarrotIcon } from './authIcons'

export default function OnboardingScreen() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[#eef2e2]" />
      <img
        src={onboardingImage}
        alt="Delivery person with groceries"
        className="absolute inset-0 h-full w-full object-cover object-[center_16%] [@media(orientation:landscape)]:object-contain [@media(orientation:landscape)]:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/15 to-black/80" />
      <div className="relative flex min-h-screen flex-col justify-end px-6 pb-10 pt-14 text-center text-white sm:px-10 landscape:justify-center landscape:pb-6 landscape:pt-8">
        <div className="absolute left-1/2 top-16 -translate-x-1/2">
          <CarrotIcon className="h-12 w-12 text-white" />
        </div>

        <div className="mx-auto max-w-sm pb-6">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Welcome to our store</h1>
          <p className="mt-4 text-base text-white/85 sm:text-lg">Get your groceries in as fast as one hour</p>
        </div>

        <Button type="button" onClick={() => navigate('/signin')} className="mx-auto mb-2 w-4/5 text-base shadow-[0_12px_30px_rgba(76,175,80,0.35)] hover:shadow-[0_14px_34px_rgba(76,175,80,0.42)] sm:w-[22rem]">
          Get Started
        </Button>
      </div>
    </div>
  )
}