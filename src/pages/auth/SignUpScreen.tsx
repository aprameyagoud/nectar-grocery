import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'
import { Button } from '../../components/ui/Button'

import { CarrotIcon, CheckIcon, EyeIcon, EyeOffIcon } from './authIcons'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function SignUpScreen() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('imshuvo97@gmail.com')

  const isValidEmail = useMemo(() => emailRegex.test(email), [email])

  return (
    <AuthLayout>
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-8 pt-8 sm:max-w-lg sm:px-8 sm:pt-10 lg:max-w-xl">
        <div className="pt-6 text-center">
          <CarrotIcon className="mx-auto h-12 w-12 text-primary" />
        </div>

        <div className="mt-8 sm:mt-10">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-[2.2rem]">Sign Up</h1>
          <p className="mt-2 text-lg text-textSecondary">Enter your credentials to continue</p>

          <div className="mt-10 space-y-6">
            <label className="block">
              <span className="mb-3 block text-lg font-medium text-textSecondary">Username</span>
              <input
                type="text"
                defaultValue="Afsar Hossen Shuvo"
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-lg text-textPrimary outline-none placeholder:text-textSecondary focus:border-primary"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-lg font-medium text-textSecondary">Email</span>
              <div className="flex items-center gap-3 border-b border-border py-3">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-transparent text-lg text-textPrimary outline-none placeholder:text-textSecondary"
                />
                {isValidEmail ? <CheckIcon className="h-6 w-6 text-primary" /> : null}
              </div>
            </label>

            <label className="block">
              <span className="mb-3 block text-lg font-medium text-textSecondary">Password</span>
              <div className="flex items-center gap-3 border-b border-border py-3">
                <input
                  type={showPassword ? 'text' : 'password'}
                  defaultValue="12345678"
                  className="w-full bg-transparent text-lg tracking-[0.25em] text-textPrimary outline-none placeholder:text-textSecondary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="text-textSecondary transition-colors hover:text-textPrimary"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </label>
          </div>

          <p className="mt-6 text-base leading-7 text-textSecondary">
            By continuing you agree to our{' '}
            <span className="text-primary">Terms of Service</span> and{' '}
            <span className="text-primary"> Privacy Policy.</span>
          </p>

          <Button type="button" onClick={() => navigate('/location')} className="mt-8 text-lg">
            Sing Up
          </Button>

          <p className="mt-6 text-center text-base text-textPrimary">
            Already have an account?{' '}
            <button type="button" onClick={() => navigate('/signin')} className="font-semibold text-primary transition-colors hover:text-primary-dark">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}