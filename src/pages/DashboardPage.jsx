export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Dashboard
        </h1>
        <p className="text-sm text-slate-600">
          Overview of your activity (will be protected in Step 5).
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="card card-pad">
          <div className="text-sm text-slate-600">Applications</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">0</div>
        </div>
        <div className="card card-pad">
          <div className="text-sm text-slate-600">Saved</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">0</div>
        </div>
        <div className="card card-pad">
          <div className="text-sm text-slate-600">Messages</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">0</div>
        </div>
      </div>

      <div className="card card-pad">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">Quick actions</div>
            <div className="text-sm text-slate-600">
              Jump into the core flows.
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a href="/opportunities" className="btn btn-primary">
              Browse Posts
            </a>
            <a href="/profile" className="btn btn-secondary">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
