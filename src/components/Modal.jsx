import { useEffect } from 'react'
import cn from '../utils/cn'

export default function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
}) {
  useEffect(() => {
    const handler = (event) => {
      if (event.key === 'Escape' && open) {
        onClose?.()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const widths = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div
        className={cn('relative w-full rounded-3xl bg-white shadow-xl', widths[size] ?? widths.md)}
        role="dialog"
        aria-modal="true"
      >
        <div className="card-pad border-b border-slate-200">
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        </div>
        <div className="card-pad">{children}</div>
        {footer ? (
          <div className="card-pad border-t border-slate-200">{footer}</div>
        ) : null}
      </div>
    </div>
  )
}
