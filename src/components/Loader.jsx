import cn from '../utils/cn'

const sizes = {
  sm: 'h-4 w-4 border',
  md: 'h-5 w-5 border-2',
  lg: 'h-6 w-6 border-2',
}

export default function Loader({ size = 'md', className = '', ...props }) {
  return (
    <span
      className={cn(
        'spinner inline-block rounded-full border-current border-t-transparent animate-spin',
        sizes[size] ?? sizes.md,
        className,
      )}
      role="status"
      aria-live="polite"
      {...props}
    />
  )
}
