import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthLayout } from '../../components/layout/AuthLayout'
import { useSmartBack } from '../../hooks/useSmartBack'

import { BackArrowIcon, CircleArrowIcon } from './authIcons'

const keypadKeys = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+*#',
  '0',
  '⌫',
]

export default function NumberScreen() {
  const navigate = useNavigate()
  const goBack = useSmartBack('/signin')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleKeypadPress = (key: string) => {
    setPhoneNumber((current) => {
      if (key === '⌫') {
        return current.slice(0, -1)
      }

      if (key === '+*#') {
        return current
      }

      if (current.length >= 10) {
        return current
      }

      return `${current}${key}`
    })
  }

  return (
    <AuthLayout>
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8 sm:px-8">
        <button type="button" onClick={goBack} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-black/5" aria-label="Go back">
          <BackArrowIcon className="h-7 w-7" />
        </button>

        <div className="mt-12">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-[2.2rem]">Enter your mobile number</h1>

          <div className="mt-10 space-y-3 border-b border-border pb-3">
            <label className="block text-lg font-medium text-textSecondary">Mobile Number</label>
            <div className="flex items-center gap-3 text-textPrimary">
              <span className="rounded-[4px] bg-[#006A4E] px-3 py-2 text-lg leading-none">🇧🇩</span>
              <span className="text-lg font-medium">+880</span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="Enter number"
                className="w-full bg-transparent text-lg text-textPrimary outline-none"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/otp', { state: { phoneNumber: `+880${phoneNumber}` } })}
          disabled={phoneNumber.length === 0}
          className="fixed bottom-40 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_12px_24px_rgba(76,175,80,0.35)] transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-primary/40 sm:right-[calc(50%-14rem)]"
          aria-label="Continue to verification"
        >
          <CircleArrowIcon className="h-6 w-6" />
        </button>

        <div className="mt-auto pb-4">
          <div className="grid grid-cols-3 gap-2 rounded-2xl bg-transparent text-center text-2xl font-medium text-textPrimary">
            {keypadKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleKeypadPress(key)}
                className="flex h-12 items-center justify-center rounded-[6px] border border-border bg-white text-base shadow-[0_2px_4px_rgba(0,0,0,0.06)] transition-transform active:scale-[0.98]"
                aria-label={key === '⌫' ? 'Delete last digit' : key === '+*#' ? 'Symbols' : `Add ${key}`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}