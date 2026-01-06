import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import cn from '../utils/cn'
import { useAuth } from '../hooks/useAuth'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/opportunities', label: 'Posts' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/profile', label: 'Profile' },
]

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="text-base font-semibold tracking-tight">
          Local Legend
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <div className="ml-2 flex items-center gap-2">
              <span className="hidden text-sm text-slate-600 sm:inline">
                Hi, {user?.name || 'User'}
              </span>
              <Button variant="secondary" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button as={Link} to="/auth" variant="primary" size="sm">
              Login
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}
