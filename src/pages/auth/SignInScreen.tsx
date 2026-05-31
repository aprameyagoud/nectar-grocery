import type { ChangeEvent, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'
import { Button } from '../../components/ui/Button'
import signInImage from '../../assets/sign in.png'

import { CarrotIcon, FacebookIcon, GlobeIcon, GoogleIcon } from './authIcons'

const groceryHero = signInImage

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
      <div className="relative min-h-screen">
        {/* Large-screen background image */}
        <img
          src={groceryHero}
          alt="Fresh grocery produce arranged for delivery"
          className="hidden lg:block absolute inset-0 h-full w-full object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 hidden lg:block bg-black/30" />

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-8 pt-0 sm:px-8 sm:py-8 lg:grid-cols-2">
          {/* Left: form and content */}
          <div className="lg:pl-12">
            <CarrotIcon className="mx-auto h-12 w-12 text-primary lg:mx-0" />
            <h1 className="mt-10 max-w-[28rem] text-left text-[2.1rem] font-semibold leading-tight tracking-[-0.04em] text-textPrimary sm:text-4xl">
              Get your groceries with nectar
            </h1>

            <div className="mt-8 max-w-md">
              <div className="mt-6 space-y-2 border-b border-border pb-3">
                <div className="flex items-center gap-3 text-textPrimary">
                  <GlobeIcon className="h-5 w-5 text-textSecondary" />
                  <span className="text-base font-medium">+91</span>
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

              <Button type="button" onClick={() => navigate('/number')} className="mt-8 w-full text-base">
                Continue with phone number
              </Button>

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
          </div>

          {/* Right: image for small screens (hidden on lg because background is used) */}
          <div className="hidden lg:block">
            <div className="h-[80vh] w-full overflow-hidden">
              <img src={groceryHero} alt="Fresh grocery produce" className="h-full w-full object-cover object-[center_18%]" />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}