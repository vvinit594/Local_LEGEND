import { NavLink } from 'react-router-dom'
import cn from '../utils/cn'

const sidebarItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/opportunities', label: 'Posts' },
  { to: '/profile', label: 'Profile' },
]

export default function Sidebar({ className = '' }) {
  return (
    <aside className={cn('hidden w-64 flex-col gap-2 border-r border-slate-200 bg-white p-4 lg:flex', className)}>
      <div className="text-sm font-semibold text-slate-500">NAVIGATE</div>
      {sidebarItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              'rounded-xl px-3 py-2 text-sm font-semibold transition-colors',
              isActive
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  )
}
