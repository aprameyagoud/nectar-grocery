import { useNavigate } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { useAuthStore } from '../store/authStore'

export default function AccountScreen() {
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const logout = useAuthStore((state) => state.logout)

  const displayName = user?.name ?? 'Guest User'
  const displayEmail = user?.email ?? 'No email connected'
  const displayPhone = user?.phone ?? '+880'

  return (
    <div className="min-h-screen bg-background px-4 pb-8 pt-4 text-textPrimary sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <h1 className="text-center text-4xl font-semibold tracking-[-0.04em]">Account</h1>

        <section className="rounded-[28px] border border-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary">👤</div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{displayName}</h2>
              <p className="mt-1 text-textSecondary">{isAuthenticated ? 'Signed in' : 'Browsing as guest'}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4 border-t border-border pt-6 text-lg">
            <div className="flex items-center justify-between gap-4">
              <span className="text-textSecondary">Email</span>
              <span className="text-textPrimary">{displayEmail}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-textSecondary">Phone</span>
              <span className="text-textPrimary">{displayPhone}</span>
            </div>
          </div>
        </section>

        <Button
          onClick={() => {
            logout()
            navigate('/signin')
          }}
          className="rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(76,175,80,0.25)] hover:bg-primary-dark"
        >
          Log out
        </Button>
      </div>
    </div>
  )
}