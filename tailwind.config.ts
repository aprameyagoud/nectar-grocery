import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
          light: '#81C784',
        },
        background: '#FFFFFF',
        surface: '#F3F3F3',
        textPrimary: '#181725',
        textSecondary: '#7C7C7C',
        border: '#E2E2E2',
      },
    },
  },
} satisfies Config