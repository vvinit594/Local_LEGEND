import cn from '../utils/cn'
import Loader from './Loader'

const variants = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn btn-ghost',
  link: 'text-sm font-semibold text-blue-600 hover:text-blue-700',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-3 text-base',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...props
}) {
  const isButtonElement = Component === 'button'
  const isDisabled = disabled || loading
  const variantClasses = variants[variant] ?? variants.primary
  const sizeClasses = sizes[size] ?? sizes.md

  const content = (
    <span className="inline-flex items-center gap-2">
      {loading ? <Loader size="sm" aria-hidden /> : leftIcon}
      <span>{children}</span>
      {rightIcon}
    </span>
  )

  return (
    <Component
      className={cn(variantClasses, sizeClasses, loading && 'btn-loading', className)}
      disabled={isButtonElement ? isDisabled : undefined}
      aria-disabled={!isButtonElement && isDisabled ? true : undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {content}
    </Component>
  )
}
