function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7faf7_100%)] text-textPrimary">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="rounded-[32px] border border-border bg-surface/80 p-6 shadow-[0_20px_60px_rgba(24,23,37,0.08)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary-light/20 px-3 py-1 text-sm font-medium text-primary-dark">
                Nectar Grocery Delivery
              </span>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Fresh groceries, fast delivery, simple ordering.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-textSecondary sm:text-lg">
                  A Vite + React + TypeScript scaffold for Nectar, built to support product discovery, cart flow, authentication, and checkout screens.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:w-[28rem]">
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="text-2xl font-semibold text-primary">25</div>
                <div className="mt-1 text-sm text-textSecondary">Mock products</div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="text-2xl font-semibold text-primary">8</div>
                <div className="mt-1 text-sm text-textSecondary">Explore categories</div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="text-2xl font-semibold text-primary">TS</div>
                <div className="mt-1 text-sm text-textSecondary">Typed from the start</div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-border bg-white p-6 shadow-[0_12px_40px_rgba(24,23,37,0.06)] sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Scaffolded structure</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-textSecondary sm:text-base">
              The shared data, hooks, and folder layout are ready for routing, state management with Zustand, and page composition under the Nectar brand.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                'components/ui',
                'components/layout',
                'pages/auth',
                'pages/main',
                'pages/checkout',
                'store, data, hooks, types',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-surface px-4 py-4 text-sm text-textPrimary">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-primary/15 bg-primary-dark p-6 text-white shadow-[0_16px_40px_rgba(56,142,60,0.25)] sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Next modules</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/90 sm:text-base">
              <li>Product listing and category filtering.</li>
              <li>Cart, checkout, and order status flows.</li>
              <li>Auth screens and persistent user state.</li>
            </ul>
          </aside>
        </section>
      </div>
    </main>
  )
}

export default App
