import { useEffect, useMemo, useState } from 'react'
import { Button, Card, FormInput } from '../components'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function AuthPage() {
  const [mode, setMode] = useState('login')
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const navigate = useNavigate()
  const location = useLocation()
  const { login, signup, isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) return
    const to = location.state?.from || '/dashboard'
    navigate(to, { replace: true })
  }, [isAuthenticated, location.state, navigate])

  const isLoading = status === 'loading'

  const statusMessage = useMemo(() => {
    if (status === 'success') {
      return {
        kind: 'success',
        text: 'Success! (UI-only) Step 5 will connect real authentication.',
      }
    }

    if (status === 'error') {
      return {
        kind: 'error',
        text: 'Something went wrong. (UI-only) Try again.',
      }
    }

    return null
  }, [status])

  const handleContinue = async () => {
    if (isLoading) return
    setStatus('loading')

    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password })
      } else {
        await signup({ name: form.name, email: form.email, password: form.password })
      }
      setStatus('success')

      const to = location.state?.from || '/dashboard'
      window.setTimeout(() => navigate(to, { replace: true }), 350)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-xl space-y-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Login / Signup
        </h1>
        <p className="text-sm text-slate-600">
          UI-only for now. Step 5 will connect this to JWT auth.
        </p>
      </div>

      {isAuthenticated ? null : null}

      <Card padded>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">Onboarding</div>
            <div className="text-sm text-slate-600">
              Login to apply, save items, and track activity.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="step step-on">
              <span className="step-dot step-dot-on" aria-hidden>
                1
              </span>
              Onboard
            </span>
            <span className="step step-off">
              <span className="step-dot step-dot-off" aria-hidden>
                2
              </span>
              Explore
            </span>
            <span className="step step-off">
              <span className="step-dot step-dot-off" aria-hidden>
                3
              </span>
              Apply
            </span>
          </div>
        </div>
      </Card>

      {statusMessage ? (
        <div
          className={`alert ${
            statusMessage.kind === 'success' ? 'alert-success' : 'alert-error'
          }`}
          role="status"
          aria-live="polite"
        >
          {statusMessage.text}
        </div>
      ) : null}

      <Card>
        <div className="border-b border-slate-200 p-2">
          <div className="flex gap-2">
            <button
              type="button"
              className={`tab flex-1 justify-center ${mode === 'login' ? 'tab-on' : 'tab-off'}`}
              disabled={isLoading}
              onClick={() => {
                setMode('login')
                setStatus('idle')
              }}
            >
              Login
            </button>
            <button
              type="button"
              className={`tab flex-1 justify-center ${mode === 'signup' ? 'tab-on' : 'tab-off'}`}
              disabled={isLoading}
              onClick={() => {
                setMode('signup')
                setStatus('idle')
              }}
            >
              Signup
            </button>
          </div>
        </div>

        <div className="card-pad space-y-4">
          {mode === 'signup' ? (
            <FormInput
              id="name"
              label="Full name"
              required
              inputProps={{
                value: form.name,
                onChange: (e) => setForm((prev) => ({ ...prev, name: e.target.value })),
                placeholder: 'Your name',
                autoComplete: 'name',
                disabled: isLoading,
              }}
            />
          ) : null}

          <FormInput
            id="email"
            label="Email"
            required
            inputProps={{
              type: 'email',
              placeholder: 'you@example.com',
              autoComplete: 'email',
              disabled: isLoading,
              value: form.email,
              onChange: (e) => setForm((prev) => ({ ...prev, email: e.target.value })),
            }}
          />

          <FormInput
            id="password"
            label="Password"
            required
            inputProps={{
              type: 'password',
              placeholder: '••••••••',
              autoComplete: mode === 'login' ? 'current-password' : 'new-password',
              disabled: isLoading,
              value: form.password,
              onChange: (e) => setForm((prev) => ({ ...prev, password: e.target.value })),
            }}
          />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Button
              className="w-full sm:w-auto"
              onClick={handleContinue}
              loading={isLoading}
              disabled={isLoading}
            >
              {mode === 'login' ? 'Continue' : 'Create account'}
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto">
              Forgot password?
            </Button>
          </div>
        </div>
      </Card>
    </section>
  )
}
