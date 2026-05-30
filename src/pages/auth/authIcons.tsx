interface IconProps {
  className?: string
}

export function CarrotIcon({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M30 10c3 0 5 2 5 5 0 2-1 4-3 5l-4 2 7 4-2 4-6-3-3 7c-4 10-10 18-17 22l-3-3c4-9 11-17 20-21l7-3-4-6 4-2c2-1 3-3 3-5 0-3 2-5 5-5s5 2 5 5c0 2-1 4-3 5l-3 2 3 4-4 3-3-4-4 2 4 6-4 2-5-8-6 3 4 5c-5 3-10 7-15 13 4-2 8-7 11-12l8-13 6 3 4-2-5-8 4-2c2-1 3-3 3-5 0-3 2-5 5-5s5 2 5 5c0 2-1 4-3 5l-4 2 4 6-4 3-4-6-5 2 5 7-4 2-5-8-6 3 4 5c-2 2-4 5-5 8-2 4-5 8-9 11l-3-3c3-4 6-7 8-12l6-12-6-3 4-8 6 3 3-6c1-1 1-2 1-3 0-3 2-5 5-5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BackArrowIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

export function CircleArrowIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export function GlobeIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 4 5.9 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.9-4-9s1.5-6.3 4-9Z" />
    </svg>
  )
}

export function EyeIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}

export function EyeOffIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a2.5 2.5 0 0 0 3.54 3.54" />
      <path d="M6.2 6.2C4 7.8 2.4 10 2 12c.7 3.2 4.7 8 10 8 1.2 0 2.4-.2 3.4-.6" />
      <path d="M14.9 5.3C18.2 6.2 21 9.2 22 12c-.5 1.4-1.3 2.8-2.3 4" />
    </svg>
  )
}

export function GoogleIcon({ className = 'h-6 w-6' }: IconProps) {
  return <span className={className + ' flex items-center justify-center rounded-full bg-white text-sm font-bold text-[#4285F4]'}>G</span>
}

export function FacebookIcon({ className = 'h-6 w-6' }: IconProps) {
  return <span className={className + ' flex items-center justify-center rounded-full bg-white text-xl font-bold text-[#4267B2]'}>f</span>
}

export function CheckIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ChevronDownIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function MapPinIllustration() {
  return (
    <svg viewBox="0 0 260 180" className="h-40 w-auto sm:h-44" fill="none" aria-hidden="true">
      <path d="M43 131h174l13-25-24-36H82L31 96l12 35Z" fill="#F4F7FD" />
      <path d="M41 131h176" stroke="#D3D9E6" strokeWidth="8" strokeLinecap="round" />
      <path d="M71 95h118l11-17-23-31H97L60 79l11 16Z" fill="#5AC58A" />
      <path d="M96 78 66 95h53l41-31-19-17-45 31Z" fill="#87B0FF" />
      <path d="M116 77 66 95h176l-26-31-66 12-34 1Z" fill="#E9EDF5" />
      <path d="M128 4c22 0 40 18 40 40 0 29-40 71-40 71S88 73 88 44c0-22 18-40 40-40Z" fill="#5C73FF" />
      <circle cx="128" cy="43" r="11" fill="#fff" />
    </svg>
  )
}