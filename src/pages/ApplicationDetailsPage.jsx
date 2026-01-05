import { useParams } from 'react-router-dom'

export default function ApplicationDetailsPage() {
  const { id } = useParams()

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

      <div className="card overflow-hidden">
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
            <button type="button" className="btn btn-primary">
              Apply
            </button>
            <button type="button" className="btn btn-secondary">
              Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
