import { useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'
import { useSmartBack } from '../../hooks/useSmartBack'

import { BackArrowIcon, ChevronDownIcon, MapPinIllustration } from './authIcons'

export default function LocationScreen() {
  const navigate = useNavigate()
  const goBack = useSmartBack('/signup')

  return (
    <AuthLayout>
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8 sm:px-8">
        <button type="button" onClick={goBack} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-black/5">
          <BackArrowIcon className="h-7 w-7" />
        </button>

        <div className="mt-10 flex flex-1 flex-col items-center text-center">
          <MapPinIllustration />

          <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-[2.2rem]">Select Your Location</h1>
          <p className="mt-4 max-w-sm text-lg leading-7 text-textSecondary">
            Switch on your location to stay in tune with what&apos;s happening in your area
          </p>

          <div className="mt-16 w-full space-y-6 text-left">
            <label className="block border-b border-border pb-4">
              <span className="mb-2 block text-lg font-medium text-textSecondary">Your Zone</span>
              <div className="flex items-center justify-between gap-3 text-xl text-textPrimary">
                <span>Banasree</span>
                <ChevronDownIcon className="h-5 w-5 text-textSecondary" />
              </div>
            </label>

            <label className="block border-b border-border pb-4">
              <span className="mb-2 block text-lg font-medium text-textSecondary">Your Area</span>
              <div className="flex items-center justify-between gap-3 text-xl text-textSecondary">
                <span>Types of your area</span>
                <ChevronDownIcon className="h-5 w-5 text-textSecondary" />
              </div>
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/home')}
          className="mt-8 w-full rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] transition-colors hover:bg-primary-dark"
        >
          Submit
        </button>
      </div>
    </AuthLayout>
  )
}