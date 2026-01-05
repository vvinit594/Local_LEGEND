import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Home
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          A web-first Local Legend experience: clear navigation, readable layouts,
          and quick access to key actions.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="card card-pad">
          <div className="space-y-1">
            <div className="text-sm font-semibold">Explore Posts</div>
            <div className="text-sm text-slate-600">
              Browse nearby posts and open details.
            </div>
          </div>
          <div className="mt-4">
            <Link to="/opportunities" className="btn btn-primary w-full">
              Go to Posts
            </Link>
          </div>
        </div>

        <div className="card card-pad">
          <div className="space-y-1">
            <div className="text-sm font-semibold">Login / Signup</div>
            <div className="text-sm text-slate-600">
              Access dashboard and profile (Step 5 wires auth).
            </div>
          </div>
          <div className="mt-4">
            <Link to="/auth" className="btn btn-secondary w-full">
              Open Auth
            </Link>
          </div>
        </div>

        <div className="card card-pad">
          <div className="space-y-1">
            <div className="text-sm font-semibold">Profile</div>
            <div className="text-sm text-slate-600">
              Account actions and settings.
            </div>
          </div>
          <div className="mt-4">
            <Link to="/profile" className="btn btn-secondary w-full">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
