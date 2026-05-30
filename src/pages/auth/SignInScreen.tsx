import type { ChangeEvent, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'

import { CarrotIcon, FacebookIcon, GlobeIcon, GoogleIcon } from './authIcons'

const groceryHero = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'

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

        <figure className="mt-8 overflow-hidden rounded-[28px] border border-border bg-[#FAF7F0] shadow-[0_18px_40px_rgba(17,24,39,0.08)]">
          <img
            src={groceryHero}
            alt="Fresh grocery produce arranged for delivery"
            className="h-40 w-full object-cover object-center"
          />
          <figcaption className="px-5 py-4 text-sm font-medium text-textSecondary">
            Fresh produce ready to deliver
          </figcaption>
        </figure>

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

        <button
          type="button"
          onClick={() => navigate('/number')}
          className="mt-8 w-full rounded-full bg-primary py-4 text-base font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] transition-colors hover:bg-primary-dark"
        >
          Continue with phone number
        </button>

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