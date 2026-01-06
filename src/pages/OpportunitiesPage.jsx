import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from '../components'

export default function OpportunitiesPage() {
  const [toast, setToast] = useState(null)

  const posts = [
    {
      id: '1',
      user: 'User 3669',
      ago: '2d ago',
      location: 'Vadodara, Gujarat',
      distance: '354.2 km away',
      title: 'Do',
    },
    {
      id: '2',
      user: 'User',
      ago: '12h ago',
      location: 'Shadnagar, Telangana',
      distance: '613.9 km away',
      title: 'Test demo',
    },
  ]

  const showToast = (nextToast) => {
    setToast(nextToast)
    window.setTimeout(() => setToast(null), 1400)
  }

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Posts</h1>
        <p className="text-sm text-slate-600">Posts from nearby users</p>
      </div>

      <Card padded>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">Explore → Details → Apply</div>
            <div className="text-sm text-slate-600">
              Start here: browse posts, open details, then apply.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="step step-on">
              <span className="step-dot step-dot-on" aria-hidden>
                1
              </span>
              Explore
            </span>
            <span className="step step-off">
              <span className="step-dot step-dot-off" aria-hidden>
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

      {toast ? (
        <div
          className={`alert ${toast.kind === 'success' ? 'alert-success' : 'alert-error'}`}
          role="status"
          aria-live="polite"
        >
          {toast.text}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <button type="button" className="tab tab-on justify-center sm:w-auto">
          All
        </button>
        <button type="button" className="tab tab-off justify-center sm:w-auto">
          My Posts
        </button>
        <button type="button" className="tab tab-off justify-center sm:w-auto">
          All Distances
          <span aria-hidden className="text-slate-400">
            ▾
          </span>
        </button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} as="article" className="overflow-hidden">
            <div className="card-pad">
              <div className="flex items-start gap-3">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700"
                  aria-hidden
                >
                  U
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="truncate text-sm font-semibold">
                      {post.user}
                    </div>
                    <div className="shrink-0 text-xs text-slate-500">{post.ago}</div>
                  </div>

                  <div className="mt-2 flex flex-col gap-1 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <span aria-hidden>📍</span>
                      <span className="truncate">{post.location}</span>
                    </div>
                    <div className="shrink-0 font-medium text-slate-600">
                      {post.distance}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[16/9] w-full bg-slate-100" aria-hidden />

            <div className="card-pad">
              <div className="text-sm font-semibold">{post.title}</div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <Button as={Link} to={`/applications/${post.id}`} variant="secondary">
                  View Details
                </Button>
                <Button onClick={() => showToast({ kind: 'success', text: 'Opening chat… (UI-only)' })}>
                  Chat
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
