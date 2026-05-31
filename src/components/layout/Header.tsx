import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

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
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <NavLink to="/home" className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.03em] text-textPrimary">
          <img src={logo} alt="Nectar logo" className="h-10 w-10" draggable={false} />
          <span>nectar</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/home" className={linkClassName}>
            <span className="text-base">Shop</span>
          </NavLink>
          <NavLink to="/explore" className={linkClassName}>
            <span className="text-base">Explore</span>
          </NavLink>
          <NavLink to="/favourites" className={linkClassName}>
            <span className="text-base">Favourites</span>
          </NavLink>
        </nav>

        <div className="flex items-center gap-6 text-textPrimary">
          <NavLink to="/cart" className="relative inline-flex items-center gap-2 text-lg font-medium text-textSecondary transition-colors hover:text-primary">
            <CartIcon />
            <Badge count={totalItems} />
          </NavLink>
          <NavLink to="/account" className="inline-flex items-center gap-2 text-lg font-medium text-textSecondary transition-colors hover:text-primary">
            <PersonIcon />
          </NavLink>
        </div>
      </div>
    </header>
  )
}