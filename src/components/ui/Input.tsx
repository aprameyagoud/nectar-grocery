import type { ChangeEvent, InputHTMLAttributes } from 'react'

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'type' | 'placeholder'
  > {
  label: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  error?: string
}

export function Input({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label htmlFor={inputId} className={`block w-full ${className}`.trim()}>
      <span className="mb-2 block text-sm font-medium text-textSecondary">{label}</span>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-textPrimary outline-none transition-colors placeholder:text-textSecondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        {...props}
      />
      {error ? <span className="mt-2 block text-sm text-red-500">{error}</span> : null}
    </label>
  )
}