"use client";

import { ListFilter } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function TaskListToolbar() {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  console.log(searchInput);

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
          <input
            onChange={handleSearchInput}
            value={searchInput}
            type="text"
            placeholder="Search issues..."
            className="w-80 rounded-lg border border-zinc-600 py-2 pr-4 pl-4 text-sm focus:border-transparent focus:ring focus:ring-zinc-400 focus:outline-none"
          />
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
