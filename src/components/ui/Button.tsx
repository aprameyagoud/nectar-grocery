import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-b from-[#5FCC66] to-[#3FA845] py-4 text-base font-semibold text-white shadow-[0_14px_28px_rgba(63,168,69,0.38)] ring-1 ring-[#2E7D32]/20 transition-all hover:from-[#56C35D] hover:to-[#368F3C] hover:shadow-[0_16px_32px_rgba(63,168,69,0.48)]',
  secondary: 'bg-primary-light/15 text-primary-dark border border-primary/15',
  ghost: 'bg-transparent text-primary-dark',
}

export function Button({ variant = 'primary', className = '', children, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex w-full items-center justify-center rounded-full px-6 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}