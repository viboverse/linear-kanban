import { ListFilter } from "lucide-react";
import Link from "next/link";

export default function Headerbar() {
  return (
    <header className="0 sticky top-0 bg-sky-800 shadow-2xl">
      <section className="flex h-16 w-full items-center justify-between bg-stone-950 px-6">
        {/* Wellcome */}
        <div>
          <h1>Hello Vahab</h1>
        </div>

        {/* Search & Filter  */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-80 rounded-lg border border-gray-200 py-2 pr-4 pl-10 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button className="flex items-center gap-2 rounded-md bg-red-800 px-4 hover:cursor-pointer">
            <ListFilter />
            <Link href="/?view=list&filter=HIGH">Filter High</Link>
          </button>
        </div>
      </section>
    </header>
  );
}
