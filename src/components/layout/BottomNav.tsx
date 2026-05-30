import { NavLink } from 'react-router-dom'

import { Badge } from '../ui/Badge'
import { useCartStore } from '../../store/cartStore'

function GridIcon() {
  return <span aria-hidden="true">⌂</span>
}

function SearchIcon() {
  return <span aria-hidden="true">⌕</span>
}

function CartIcon() {
  return <span aria-hidden="true">🛒</span>
}

function HeartIcon() {
  return <span aria-hidden="true">♡</span>
}

function PersonIcon() {
  return <span aria-hidden="true">👤</span>
}

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  `flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${
    isActive ? 'text-primary' : 'text-textSecondary'
  }`

export function BottomNav() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-5 px-4 py-3">
        <NavLink to="/home" className={linkClassName}>
          <GridIcon />
          <span>Shop</span>
        </NavLink>
        <NavLink to="/explore" className={linkClassName}>
          <SearchIcon />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/cart" className={linkClassName}>
          <span className="relative inline-flex items-center justify-center">
            <CartIcon />
            <span className="absolute -right-3 -top-2">
              <Badge count={totalItems} />
            </span>
          </span>
          <span>Cart</span>
        </NavLink>
        <NavLink to="/favourites" className={linkClassName}>
          <HeartIcon />
          <span>Favourite</span>
        </NavLink>
        <NavLink to="/account" className={linkClassName}>
          <PersonIcon />
          <span>Account</span>
        </NavLink>
      </div>
    </nav>
  )
}