import cn from '../utils/cn'

export default function FormInput({
  label,
  id,
  helper,
  error,
  required,
  className = '',
  inputProps = {},
}) {
  return (
    <div className={cn('space-y-2', className)}>
      {label ? (
        <label className="label" htmlFor={id}>
          {label}
          {required ? <span className="text-rose-600">*</span> : null}
        </label>
      ) : null}
      <input id={id} className={cn('input', error && 'border-rose-300')} {...inputProps} />
      {helper ? <p className="text-xs text-slate-500">{helper}</p> : null}
      {error ? <p className="text-xs text-rose-600">{error}</p> : null}
    </div>
  )
}
