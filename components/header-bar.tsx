import { ListFilter } from "lucide-react";
import Link from "next/link";

export default function Headerbar() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-800 px-12">
      <h1>Hello Vahab</h1>
      <section className="flex items-center gap-2 rounded-md bg-red-800 px-4 hover:cursor-pointer">
        <ListFilter />
        <Link href="/?view=list&filter=HIGH">Filter High</Link>
      </section>
    </header>
  );
}
