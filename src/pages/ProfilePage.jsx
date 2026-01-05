export default function ProfilePage() {
  const items = [
    {
      title: 'My Wishlist',
      subtitle: 'Items you saved',
      badge: '♥',
      badgeClassName: 'bg-rose-50 text-rose-700 border-rose-100',
    },
    {
      title: 'Refer a Friend',
      subtitle: 'Share & grow together',
      badge: '🎁',
      badgeClassName: 'bg-violet-50 text-violet-700 border-violet-100',
    },
    {
      title: 'Settings',
      subtitle: 'Preferences & account',
      badge: '⚙',
      badgeClassName: 'bg-sky-50 text-sky-700 border-sky-100',
    },
    {
      title: 'Help & Support',
      subtitle: 'Chat with us on WhatsApp',
      badge: '?',
      badgeClassName: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      title: 'Privacy Policy',
      subtitle: 'Terms and conditions',
      badge: '🛡',
      badgeClassName: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    },
  ]

  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Profile
        </h1>
        <p className="text-sm text-slate-600">
          Account actions (Step 5 will secure logout and profile data).
        </p>
      </div>

      <div className="card">
        <div className="card-pad border-b border-slate-200">
          <div className="text-sm font-semibold tracking-wide text-slate-500">
            ACCOUNT
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <div className="space-y-3">
            {items.map((item) => (
              <button
                key={item.title}
                type="button"
                className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-2xl border text-sm font-semibold ${item.badgeClassName}`}
                    aria-hidden
                  >
                    {item.badge}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">
                      {item.title}
                    </div>
                    <div className="truncate text-sm text-slate-600">
                      {item.subtitle}
                    </div>
                  </div>
                  <div className="text-slate-400" aria-hidden>
                    ›
                  </div>
                </div>
              </button>
            ))}

            <button
              type="button"
              className="w-full rounded-2xl border border-rose-200 bg-rose-50 p-4 text-left hover:bg-rose-100"
            >
              <div className="flex items-center gap-3">
                <div
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-rose-100 bg-white text-rose-700"
                  aria-hidden
                >
                  ⎋
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-rose-700">
                    Logout
                  </div>
                  <div className="truncate text-sm text-rose-700/80">
                    Sign out of your account
                  </div>
                </div>
                <div className="text-rose-400" aria-hidden>
                  ›
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
