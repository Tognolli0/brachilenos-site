export default function WorkWithUsLoading() {
  return (
    <main className="min-h-screen bg-[#f8faf9]">
      <div className="shell py-12">
        <div className="h-4 w-36 animate-pulse bg-[#b88228]/30" />
        <div className="mt-6 h-16 max-w-2xl animate-pulse bg-[#071f3b]/15" />
        <div className="mt-4 h-6 max-w-xl animate-pulse bg-[#071f3b]/10" />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="h-72 animate-pulse border border-[#d9e0e6] bg-white" />
          <div className="h-72 animate-pulse border border-[#d9e0e6] bg-white" />
        </div>
      </div>
    </main>
  );
}
