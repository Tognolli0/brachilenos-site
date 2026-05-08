export default function AboutLoading() {
  return (
    <main className="min-h-screen bg-[#f8faf9]">
      <section className="section-pad">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <div>
            <div className="h-4 w-40 animate-pulse bg-[#b88228]/30" />
            <div className="mt-6 h-16 max-w-xl animate-pulse bg-[#071f3b]/15" />
            <div className="mt-4 h-28 max-w-2xl animate-pulse bg-[#071f3b]/10" />
          </div>
          <div className="min-h-80 animate-pulse bg-[#d9e0e6]" />
        </div>
      </section>
    </main>
  );
}
