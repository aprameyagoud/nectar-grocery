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
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8 sm:max-w-xl sm:px-8 lg:max-w-2xl">
        <button type="button" onClick={goBack} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-textPrimary transition-colors hover:bg-black/5" aria-label="Go back">
          <BackArrowIcon className="h-7 w-7" />
        </button>

        <div className="mt-12 sm:mt-14">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-textPrimary sm:text-[2.2rem]">Enter your mobile number</h1>

          <div className="mt-10 space-y-3 border-b border-border pb-3">
            <label className="block text-lg font-medium text-textSecondary">Mobile Number</label>
            <div className="flex items-center gap-3 text-textPrimary">
              <span className="rounded-[4px] bg-[#006A4E] px-3 py-2 text-lg font-semibold leading-none text-white">IN</span>
              <span className="text-lg font-medium">+91</span>
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

        <div className="mt-auto flex flex-col gap-6 pb-4 pt-10 sm:pt-12">
          <div className="grid grid-cols-3 gap-2 rounded-2xl bg-transparent text-center text-2xl font-medium text-textPrimary sm:gap-3">
            {keypadKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleKeypadPress(key)}
                className="flex h-12 items-center justify-center rounded-[6px] border border-border bg-white text-base shadow-[0_2px_4px_rgba(0,0,0,0.06)] transition-transform active:scale-[0.98] sm:h-14 sm:text-lg"
                aria-label={key === '⌫' ? 'Delete last digit' : key === '+*#' ? 'Symbols' : `Add ${key}`}
              >
                {key}
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/otp', { state: { phoneNumber: `+91${phoneNumber}` } })}
              disabled={phoneNumber.length === 0}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#5FCC66] to-[#3FA845] text-white shadow-[0_14px_28px_rgba(63,168,69,0.42)] ring-1 ring-[#2E7D32]/20 transition-all hover:from-[#56C35D] hover:to-[#368F3C] hover:shadow-[0_16px_32px_rgba(63,168,69,0.52)] disabled:cursor-not-allowed disabled:bg-[#4CAF50]/40"
              aria-label="Continue to verification"
            >
              <CircleArrowIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}