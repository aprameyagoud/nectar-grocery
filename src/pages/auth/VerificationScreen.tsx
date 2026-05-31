import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'
import { useSmartBack } from '../../hooks/useSmartBack'

import { BackArrowIcon, CircleArrowIcon } from './authIcons'

export default function VerificationScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const goBack = useSmartBack('/number')
  const [code, setCode] = useState(['', '', '', ''])
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  const codeDisplay = useMemo(() => code.map((digit) => digit || '-').join(' '), [code])
  const phoneNumber = typeof location.state === 'object' && location.state && 'phoneNumber' in location.state
    ? String(location.state.phoneNumber)
    : '+91'
  const isComplete = code.every((digit) => digit.length === 1)

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index: number, value: string) => {
    const nextDigit = value.replace(/\D/g, '').slice(-1)
    const nextCode = [...code]
    nextCode[index] = nextDigit
    setCode(nextCode)

    if (nextDigit && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <AuthLayout>
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8 sm:max-w-xl sm:px-8 lg:max-w-2xl">
        <button type="button" onClick={goBack} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-black/5">
          <BackArrowIcon className="h-7 w-7" />
        </button>

        <div className="mt-12 sm:mt-14">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-[2.2rem]">Enter your 4-digit code</h1>
          <p className="mt-3 text-base text-textSecondary sm:max-w-md">We sent a code to {phoneNumber}</p>
          <label className="mt-10 block text-lg font-medium text-textSecondary">Code</label>

          <div className="mt-4 flex items-center justify-center gap-3 border-b border-border pb-4 text-textPrimary sm:gap-4">
            {code.map((digit, index) => (
              <input
                key={`digit-${index}`}
                ref={(node) => {
                  inputRefs.current[index] = node
                }}
                value={digit}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                inputMode="numeric"
                maxLength={1}
                className="flex h-14 w-14 rounded-2xl border border-border bg-white text-center text-2xl font-semibold text-textPrimary shadow-[0_4px_12px_rgba(0,0,0,0.06)] outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-16 sm:w-16"
                aria-label={`Code digit ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pb-4 pt-10 text-base">
          <button type="button" className="text-primary transition-colors hover:text-primary-dark">
            Resend Code
          </button>

          <button
            type="button"
            onClick={() => navigate('/signup')}
            disabled={!isComplete}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#5FCC66] to-[#3FA845] text-white shadow-[0_14px_28px_rgba(63,168,69,0.42)] ring-1 ring-[#2E7D32]/20 transition-all hover:from-[#56C35D] hover:to-[#368F3C] hover:shadow-[0_16px_32px_rgba(63,168,69,0.52)] disabled:cursor-not-allowed disabled:bg-[#4CAF50]/40"
            aria-label="Continue to sign up"
          >
            <CircleArrowIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="sr-only" aria-hidden="true">
          {codeDisplay}
        </div>
      </div>
    </AuthLayout>
  )
}