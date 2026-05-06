export default function CareersLoading() {
  return (
    <main className="min-h-screen bg-[#071f3b] text-white">
      <section className="shell grid min-h-[520px] items-center gap-8 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.88fr)]">
        <div>
          <div className="mb-4 h-4 w-40 animate-pulse bg-[#b88228]/70" />
          <div className="mb-3 h-16 w-full max-w-lg animate-pulse bg-white/15" />
          <div className="mb-6 h-16 w-4/5 max-w-md animate-pulse bg-white/15" />
          <div className="h-24 w-full max-w-xl animate-pulse bg-white/10" />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <div className="h-12 w-full animate-pulse bg-white sm:w-48" />
            <div className="h-12 w-full animate-pulse border border-white/50 sm:w-44" />
          </div>
        </div>
        <div className="min-h-[320px] animate-pulse border border-white/20 bg-white/5" />
      </section>
    </main>
  );
}
