import { Link, NavLink, Outlet } from 'react-router-dom'

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-slate-900 text-white'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
  ].join(' ')

export default function AppLayout() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="text-base font-semibold tracking-tight">
            Local Legend
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClassName}>
              Home
            </NavLink>
            <NavLink to="/opportunities" className={navLinkClassName}>
              Posts
            </NavLink>
            <NavLink to="/dashboard" className={navLinkClassName}>
              Dashboard
            </NavLink>
            <NavLink to="/profile" className={navLinkClassName}>
              Profile
            </NavLink>
            <NavLink to="/auth" className={navLinkClassName}>
              Login
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}
