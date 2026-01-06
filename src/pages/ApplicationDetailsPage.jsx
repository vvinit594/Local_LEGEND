import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from '../components'

export default function ApplicationDetailsPage() {
  const { id } = useParams()
  const [status, setStatus] = useState('idle')

  const isLoading = status === 'loading'

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Application Details
        </h1>
        <p className="text-sm text-slate-600">
          Details view for a post/opportunity (UI-only for Step 2).
        </p>
      </div>

      <Card padded>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">You’re on step 2</div>
            <div className="text-sm text-slate-600">
              Review details, then apply. If required, login first.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="step step-off">
              <span className="step-dot step-dot-off" aria-hidden>
                1
              </span>
              Explore
            </span>
            <span className="step step-on">
              <span className="step-dot step-dot-on" aria-hidden>
                2
              </span>
              Details
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

      <Card className="overflow-hidden" padded={false}>
        <div className="aspect-[16/9] w-full bg-slate-100" aria-hidden />
        <div className="card-pad space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold tracking-wide text-slate-500">
              POST ID
            </div>
            <div className="text-lg font-semibold tracking-tight">{id}</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold tracking-wide text-slate-500">
                LOCATION
              </div>
              <div className="mt-1 text-sm font-medium text-slate-900">
                Vadodara, Gujarat
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold tracking-wide text-slate-500">
                DISTANCE
              </div>
              <div className="mt-1 text-sm font-medium text-slate-900">
                354.2 km away
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold">Description</div>
            <p className="text-sm text-slate-600">
              This section will hold the full post details, requirements, and
              application steps when the backend is connected.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Button
              loading={isLoading}
              disabled={isLoading}
              onClick={() => {
                if (isLoading) return
                setStatus('loading')
                window.setTimeout(() => setStatus('success'), 900)
              }}
            >
              Apply
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setStatus('idle')
              }}
            >
              Chat
            </Button>
          </div>

          {status === 'success' ? (
            <div className="alert alert-success" role="status" aria-live="polite">
              Application submitted! (UI-only) Step 6 will connect real API.
            </div>
          ) : null}

          {status === 'error' ? (
            <div className="alert alert-error" role="status" aria-live="polite">
              Couldn’t submit. (UI-only) Please retry.
            </div>
          ) : null}

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
            Tip: if Apply asks you to login, use the{' '}
            <a href="/auth" className="font-semibold text-blue-800 underline">
              Login / Signup
            </a>{' '}
            page and then come back to this post.
          </div>
        </div>
      </Card>
    </section>
  )
}
