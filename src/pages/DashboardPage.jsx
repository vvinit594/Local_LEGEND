import { Button, Card } from '../components'

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
        <Card padded>
          <div className="text-sm text-slate-600">Applications</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">0</div>
        </Card>
        <Card padded>
          <div className="text-sm text-slate-600">Saved</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">0</div>
        </Card>
        <Card padded>
          <div className="text-sm text-slate-600">Messages</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">0</div>
        </Card>
      </div>

      <Card padded>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">Quick actions</div>
            <div className="text-sm text-slate-600">
              Jump into the core flows.
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button as="a" href="/opportunities">
              Browse Posts
            </Button>
            <Button as="a" href="/profile" variant="secondary">
              View Profile
            </Button>
          </div>
        </div>
      </Card>
    </section>
  )
}
