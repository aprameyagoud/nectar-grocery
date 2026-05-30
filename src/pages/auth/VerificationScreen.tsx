import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'

import { BackArrowIcon, CircleArrowIcon } from './authIcons'

export default function VerificationScreen() {
  const navigate = useNavigate()
  const [code, setCode] = useState(['', '', '', ''])
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  const codeDisplay = useMemo(() => code.map((digit) => digit || '-').join(' '), [code])

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
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8 sm:px-8">
        <button type="button" onClick={() => navigate(-1)} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-black/5">
          <BackArrowIcon className="h-7 w-7" />
        </button>

        <div className="mt-12">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-[2.2rem]">Enter your 4-digit code</h1>
          <label className="mt-10 block text-lg font-medium text-textSecondary">Code</label>

          <div className="mt-4 flex items-center gap-2 border-b border-border pb-3 text-2xl tracking-[0.2em] text-textPrimary">
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
                className="h-10 w-6 bg-transparent text-center text-2xl outline-none"
                aria-label={`Code digit ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="fixed bottom-40 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_12px_24px_rgba(76,175,80,0.35)] transition-colors hover:bg-primary-dark sm:right-[calc(50%-14rem)]"
          aria-label="Continue to signup"
        >
          <CircleArrowIcon className="h-6 w-6" />
        </button>

        <div className="mt-auto flex items-end justify-between pb-4 text-base">
          <button type="button" className="text-primary transition-colors hover:text-primary-dark">
            Resend Code
          </button>
        </div>

        <div className="sr-only" aria-hidden="true">
          {codeDisplay}
        </div>
      </div>
    </AuthLayout>
  )
}