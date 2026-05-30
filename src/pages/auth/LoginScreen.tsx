import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'

import { CarrotIcon, EyeIcon, EyeOffIcon } from './authIcons'

export default function LoginScreen() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthLayout>
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8 sm:px-8">
        <div className="pt-8 text-center">
          <CarrotIcon className="mx-auto h-12 w-12 text-primary" />
        </div>

        <div className="mt-24">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-[2.2rem]">Loging</h1>
          <p className="mt-2 text-lg text-textSecondary">Enter your emails and password</p>

          <div className="mt-10 space-y-6">
            <label className="block">
              <span className="mb-3 block text-lg font-medium text-textSecondary">Email</span>
              <input
                type="email"
                defaultValue="imshuvo97@gmail.com"
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-lg text-textPrimary outline-none placeholder:text-textSecondary focus:border-primary"
              />
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

          <div className="mt-4 text-right">
            <button type="button" className="text-base text-textSecondary transition-colors hover:text-textPrimary">
              Forgot Password?
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate('/home')}
            className="mt-8 w-full rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] transition-colors hover:bg-primary-dark"
          >
            Log In
          </button>

          <p className="mt-6 text-center text-base text-textPrimary">
            Don&apos;t have an account?{' '}
            <button type="button" onClick={() => navigate('/signup')} className="font-semibold text-primary transition-colors hover:text-primary-dark">
              Singup
            </button>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}