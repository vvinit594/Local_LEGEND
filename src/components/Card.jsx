import cn from '../utils/cn'

export default function Card({
  as: Component = 'div',
  padded = false,
  shadow = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={cn('card', padded && 'card-pad', shadow && 'shadow-sm', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
