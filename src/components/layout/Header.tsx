import { NavLink } from 'react-router-dom'

import { Badge } from '../ui/Badge'
import { useCartStore } from '../../store/cartStore'

function CartIcon() {
  return <span aria-hidden="true">🛒</span>
}

function PersonIcon() {
  return <span aria-hidden="true">👤</span>
}

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-textSecondary'}`

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <header className="sticky top-0 z-40 hidden border-b border-border bg-white md:flex">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/home" className="flex items-center gap-2 text-xl font-semibold tracking-[-0.03em] text-textPrimary">
          <span role="img" aria-label="carrot">🥕</span>
          <span>nectar</span>
        </NavLink>

        <nav className="flex items-center gap-8">
          <NavLink to="/home" className={linkClassName}>
            Shop
          </NavLink>
          <NavLink to="/explore" className={linkClassName}>
            Explore
          </NavLink>
          <NavLink to="/favourites" className={linkClassName}>
            Favourites
          </NavLink>
        </nav>

        <div className="flex items-center gap-5 text-textPrimary">
          <NavLink to="/cart" className="relative inline-flex items-center gap-2 text-sm font-medium text-textSecondary transition-colors hover:text-primary">
            <CartIcon />
            <Badge count={totalItems} />
          </NavLink>
          <NavLink to="/account" className="inline-flex items-center gap-2 text-sm font-medium text-textSecondary transition-colors hover:text-primary">
            <PersonIcon />
          </NavLink>
        </div>
      </div>
    </header>
  )
}