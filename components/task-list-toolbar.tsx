import { ListFilter } from "lucide-react";
import Link from "next/link";
import SearchInput from "./search-input";

export default async function TaskListToolbar() {
  return (
    <div className="mb-4 border-b border-zinc-100/20">
      <div className="my-6 flex items-center justify-between px-8">
        <div>
          <h1 className="mb-1">Task List</h1>
          <p className="text-sm text-gray-200">
            Manage your tasks with priority, status, and due dates
          </p>
        </div>
        <div className="flex gap-4">
          <SearchInput />
          <Link
            href="/?view=list&filter=HIGH"
            className="flex items-center gap-2 rounded-md bg-zinc-600 px-4 py-2 hover:cursor-pointer"
          >
            <ListFilter />
            Filter High
          </Link>
        </div>
      </div>
    </div>
  );
}
