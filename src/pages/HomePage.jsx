import { useState } from 'react'

export default function HomePage() {
  const [activeFeed, setActiveFeed] = useState('services')
  const [activeCategory, setActiveCategory] = useState('all')

  const city = 'Mumbai'

  const nearbyStores = [
    { id: 'lisa', name: 'Lisa', distanceKm: 7.2 },
    { id: 'yuvraj', name: 'Yuvraj', distanceKm: 171 },
    { id: 'shivam', name: 'Shivam kolhe', distanceKm: 132.6 },
    { id: 'shree', name: 'Shree', distanceKm: 155.3 },
  ]

  const serviceCategories = [
    { id: 'all', label: 'All', badge: '▦' },
    { id: 'app-dev', label: 'App Development', badge: 'A' },
    { id: 'video-edit', label: 'Video Editing', badge: 'V' },
    { id: 'web-dev', label: 'Website Dev', badge: 'W' },
    { id: 'digital', label: 'Digital Marketing', badge: 'D' },
  ]

  const productCategories = [
    { id: 'all', label: 'All', badge: '▦' },
    { id: 'fruits', label: 'Fruits & Vegetables', badge: 'F' },
    { id: 'grocery', label: 'Grocery & Daily', badge: 'G' },
    { id: 'tourism', label: 'Adventure Tourism', badge: 'A' },
    { id: 'agencies', label: 'Advertising Agencies', badge: 'A' },
  ]

  const categories = activeFeed === 'services' ? serviceCategories : productCategories

  const recommended =
    activeFeed === 'services'
      ? [
          {
            id: 'svc-1',
            title: 'App dev',
            imageSrc: '/mock/reco-1.svg',
            price: 1,
            oldPrice: 10000,
            distanceKm: 534.7,
            discountLabel: '100% OFF',
          },
          {
            id: 'svc-2',
            title: 'Document & Resume Formatting',
            imageSrc: '/mock/reco-2.svg',
            price: 200,
            oldPrice: 300,
            distanceKm: 628.1,
            discountLabel: '33% OFF',
          },
          {
            id: 'svc-3',
            title: 'Website Development',
            imageSrc: '/mock/reco-3.svg',
            price: 1500,
            oldPrice: 0,
            distanceKm: 357.4,
            discountLabel: '',
          },
          {
            id: 'svc-4',
            title: 'Excel Data Entry',
            imageSrc: '/mock/reco-4.svg',
            price: 500,
            oldPrice: 0,
            distanceKm: 408.3,
            discountLabel: '',
          },
        ]
      : [
          {
            id: 'prd-1',
            title: 'Maggi 2 Minute Masala Noodles 70g',
            imageSrc: '/mock/reco-5.svg',
            price: 15,
            oldPrice: 0,
            distanceKm: 408.3,
            discountLabel: '',
          },
          {
            id: 'prd-2',
            title: 'Balaji Wheelos Masala',
            imageSrc: '/mock/reco-6.svg',
            price: 5,
            oldPrice: 0,
            distanceKm: 408.3,
            discountLabel: '',
          },
          {
            id: 'prd-3',
            title: 'Knorr Chicken Cubes',
            imageSrc: '/mock/reco-7.svg',
            price: 630,
            oldPrice: 0,
            distanceKm: 628.1,
            discountLabel: '',
          },
          {
            id: 'prd-4',
            title: 'Knorr Gravy Mix, Classic Brown',
            imageSrc: '/mock/reco-8.svg',
            price: 1319,
            oldPrice: 0,
            distanceKm: 628.1,
            discountLabel: '',
          },
        ]

  return (
    <section className="space-y-6">
      <div className="-mx-4 bg-blue-600 px-4 pb-6 pt-4 text-white sm:rounded-b-[28px]">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-lg font-semibold leading-none">Local</div>
              <div className="text-lg font-semibold leading-none">Legend</div>
              <div className="mt-1 text-[11px] font-medium text-white/80">
                BUY LOCAL. SUPPORT LOCAL.
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-2 text-sm font-semibold text-white hover:bg-white/25"
              aria-label="Select location"
            >
              <span aria-hidden>📍</span>
              <span className="max-w-[10rem] truncate">{city}</span>
              <span className="text-white/80" aria-hidden>
                ↻
              </span>
            </button>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/25"
              aria-label="Cart"
            >
              <span aria-hidden>🛒</span>
            </button>
          </div>

          <div className="mt-4">
            <div className="relative">
              <span
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                aria-hidden
              >
                🔍
              </span>
              <input
                className="w-full rounded-2xl bg-white px-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm"
                placeholder="Search for products, brands and more"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-lg font-semibold tracking-tight">Nearby Stores</div>
            <div className="text-sm text-slate-600">Visit sellers in your area</div>
          </div>
          <button type="button" className="px-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
            See All
          </button>
        </div>

        <div className="-mx-1 flex gap-6 overflow-x-auto px-1 pb-1">
          {nearbyStores.map((store) => (
            <button
              key={store.id}
              type="button"
              className="shrink-0 text-left"
              aria-label={`Open ${store.name}`}
            >
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-blue-600 text-xl font-semibold text-white">
                {store.name.slice(0, 1).toUpperCase()}
                <span
                  className="absolute bottom-1 right-1 grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white ring-2 ring-white"
                  aria-hidden
                >
                  ✓
                </span>
              </div>
              <div className="mt-2 w-24">
                <div className="truncate text-sm font-semibold">
                  {store.name}
                </div>
                <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <span aria-hidden>📍</span>
                  {store.distanceKm} km away
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="card card-pad">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">Your next steps</div>
            <div className="text-sm text-slate-600">
              Follow a simple flow to reduce confusion.
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

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-semibold">Create account</div>
            <div className="mt-1 text-sm text-slate-600">
              Login to save and apply.
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-semibold">Browse</div>
            <div className="mt-1 text-sm text-slate-600">
              Use categories and search.
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-semibold">Apply or chat</div>
            <div className="mt-1 text-sm text-slate-600">
              Open details, then apply.
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a href="/auth" className="btn btn-primary">
            Start onboarding
          </a>
          <a href="/opportunities" className="btn btn-secondary">
            Skip to explore
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveFeed('services')}
            className={
              activeFeed === 'services'
                ? 'rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow'
                : 'rounded-full px-5 py-2 text-sm font-semibold text-slate-500 hover:text-slate-700'
            }
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => setActiveFeed('products')}
            className={
              activeFeed === 'products'
                ? 'rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow'
                : 'rounded-full px-5 py-2 text-sm font-semibold text-slate-500 hover:text-slate-700'
            }
          >
            Products
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <div className="text-lg font-semibold tracking-tight">Categories</div>
          <button type="button" className="px-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
            See All
          </button>
        </div>

        <div className="-mx-1 flex gap-5 overflow-x-auto px-1 pb-1">
          {categories.map((cat) => {
            const selected = activeCategory === cat.id
            const isAll = cat.id === 'all'

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className="shrink-0 text-center"
              >
                <div
                  className={
                    selected || (isAll && activeCategory === 'all')
                      ? 'mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue-600 text-white'
                      : 'mx-auto grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-slate-500'
                  }
                  aria-hidden
                >
                  <span className="text-xl font-semibold">{cat.badge}</span>
                </div>
                <div className="mt-2 w-20 text-[12px] font-medium text-slate-700">
                  {cat.label}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="text-lg font-semibold tracking-tight">
            Recommended for you
          </div>
          <div className="text-sm text-slate-600">100 items near you</div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((item) => (
            <article key={item.id} className="card overflow-hidden">
              <div className="relative">
                <img
                  className="aspect-[4/3] w-full bg-slate-100 object-cover"
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                />

                <button
                  type="button"
                  className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm hover:bg-white"
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>

                {item.discountLabel ? (
                  <div className="absolute bottom-3 left-3 rounded-md bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">
                    {item.discountLabel}
                  </div>
                ) : null}
              </div>

              <div className="p-4">
                <div className="line-clamp-2 text-sm font-medium">
                  {item.title}
                </div>

                <div className="mt-2 flex items-baseline gap-2">
                  <div className="text-base font-semibold">₹{item.price}</div>
                  {item.oldPrice ? (
                    <div className="text-sm text-slate-400 line-through">
                      ₹{item.oldPrice}
                    </div>
                  ) : null}
                </div>

                <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <span aria-hidden>📍</span>
                  {item.distanceKm} km
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
