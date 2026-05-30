import type { ReactNode } from 'react'

import { BottomNav } from './BottomNav'
import { Header } from './Header'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Header />
      <main className="pb-20 md:pb-0">{children}</main>
      <BottomNav />
    </div>
  )
}