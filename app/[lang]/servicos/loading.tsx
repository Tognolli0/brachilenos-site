export default function ServicesLoading() {
  return (
    <main className="min-h-screen bg-[#f8faf9]">
      <section className="border-b border-[#071f3b]/10 bg-[linear-gradient(120deg,#071f3b,#0b345b_62%,#0f6f43)] py-16 text-white">
        <div className="shell">
          <div className="h-4 w-40 animate-pulse bg-white/25" />
          <div className="mt-6 h-14 max-w-2xl animate-pulse bg-white/20" />
          <div className="mt-4 h-6 max-w-xl animate-pulse bg-white/15" />
        </div>
      </section>
      <section className="section-pad">
        <div className="shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-52 animate-pulse border border-[#d9e0e6] bg-white" />
          ))}
        </div>
      </section>
    </main>
  );
}
