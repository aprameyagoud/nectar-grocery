import type { ChangeEvent, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'

import { CarrotIcon, FacebookIcon, GlobeIcon, GoogleIcon } from './authIcons'

export default function SignInScreen() {
  const navigate = useNavigate()

  const handlePhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate('/number')
    }
  }

  const handlePhoneChange = (_event: ChangeEvent<HTMLInputElement>) => {
    // Intentionally no state yet; this screen is a visual scaffold.
  }

  return (
    <AuthLayout>
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8 sm:px-8">
        <div className="pt-4 text-center">
          <CarrotIcon className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-14 text-left text-4xl font-semibold tracking-[-0.04em] text-textPrimary">Get your groceries with nectar</h1>
        </div>

        <div className="mt-10 space-y-2 border-b border-border pb-3">
          <div className="flex items-center gap-3 text-textPrimary">
            <GlobeIcon className="h-5 w-5 text-textSecondary" />
            <span className="text-base font-medium">+880</span>
            <input
              type="tel"
              value=""
              onChange={handlePhoneChange}
              onKeyDown={handlePhoneKeyDown}
              placeholder="Phone number"
              className="w-full bg-transparent text-base text-textPrimary outline-none placeholder:text-textSecondary"
            />
          </div>
        </div>

        <div className="mt-10 text-center text-sm font-medium text-textSecondary">Or connect with social media</div>

        <div className="mt-8 space-y-4">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="flex w-full items-center justify-center gap-4 rounded-[22px] bg-[#5C86F7] px-6 py-5 text-base font-medium text-white shadow-[0_10px_25px_rgba(92,134,247,0.25)] transition-colors hover:bg-[#4f78ea]"
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="flex w-full items-center justify-center gap-4 rounded-[22px] bg-[#4E6BB4] px-6 py-5 text-base font-medium text-white shadow-[0_10px_25px_rgba(78,107,180,0.25)] transition-colors hover:bg-[#455ea0]"
          >
            <FacebookIcon />
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}