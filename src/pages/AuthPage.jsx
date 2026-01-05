export default function AuthPage() {
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

      <div className="card">
        <div className="border-b border-slate-200 p-2">
          <div className="flex gap-2">
            <button type="button" className="tab tab-on flex-1 justify-center">
              Login
            </button>
            <button
              type="button"
              className="tab tab-off flex-1 justify-center"
            >
              Signup
            </button>
          </div>
        </div>

        <div className="card-pad space-y-4">
          <div className="space-y-2">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" className="btn btn-primary w-full sm:w-auto">
              Continue
            </button>
            <button type="button" className="btn btn-ghost w-full sm:w-auto">
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
