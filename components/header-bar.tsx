export default function Headerbar() {
  return (
    <header className="rounded-t-lg border-b border-zinc-100/20 bg-zinc-800/30 shadow-2xl">
      <section className="flex h-16 w-full items-center justify-between px-6">
        {/* Wellcome */}
        <div>
          <h1>Hello Vahab</h1>
        </div>

        {/* Search & Filter  */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search issues..."
            className="w-80 rounded-lg border border-zinc-600 py-2 pr-4 pl-4 text-sm focus:border-transparent focus:ring focus:ring-zinc-400 focus:outline-none"
          />
        </div>
      </section>
    </header>
  );
}
