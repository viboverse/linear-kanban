"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { BookOpenCheck, LayoutDashboard, List } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import NewIssueDialog from "./new-issues-dialog";

export default function SideBarNav() {
  const searchParams = useSearchParams();

  const currentView = searchParams.get("view") || "board";
  const currentFilter = searchParams.get("filter");

  function isActive(view: string, filter?: string) {
    if (filter) {
      return currentView === view && currentFilter === filter;
    }

    return currentView === view && !currentFilter;
  }
  return (
    <div className="sticky top-0 col-span-1 h-screen border-r border-gray-800 bg-stone-950 px-4">
      {/* Header & Logo */}
      <div className="w-full border-b border-blue-600 py-2 text-center">
        <Link href="/?view=board" className="text-xl font-bold">
          Kanban App
        </Link>
      </div>

      {/* Issues */}
      <div className="flex h-3/4 flex-col items-center justify-between">
        <div className="mt-12 flex w-full flex-col gap-2 rounded-md bg-zinc-800 px-1">
          <Link
            href="/?view=list"
            className={`flex items-center gap-3 rounded-md px-4 py-2 ${
              isActive("list")
                ? "bg-blue-800 text-white"
                : "text-gray-300 hover:bg-neutral-800"
            }`}
          >
            <List size={18} />
            <span>List View</span>
          </Link>

          <Link
            href="/?view=board"
            className={`flex items-center gap-3 rounded-md px-4 py-2 ${
              isActive("board")
                ? "bg-blue-800 text-white"
                : "text-gray-300 hover:bg-neutral-800"
            }`}
          >
            <LayoutDashboard size={18} />
            <span>Board</span>
          </Link>

          <Link
            href="/?view=list&filter=me"
            className={`flex items-center gap-3 rounded-md px-4 py-2 ${
              isActive("list", "me")
                ? "bg-blue-800 text-white"
                : "text-gray-300 hover:bg-neutral-800"
            }`}
          >
            <BookOpenCheck size={18} />
            <span>My Issues</span>
          </Link>
        </div>

        {/* ADD ISSUE */}
        <div>
          <NewIssueDialog />
        </div>

        <div>
          <header className="flex h-16 items-center justify-end gap-4 p-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="h-10 cursor-pointer rounded-full bg-[#6c47ff] px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
      </div>
    </div>
  );
}
