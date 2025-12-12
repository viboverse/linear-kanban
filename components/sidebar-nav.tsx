"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function SideBarNav() {
  return (
    <div className="col-span-1 h-screen border-r border-gray-800 bg-stone-950 px-4">
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
            className="cursor-pointer rounded-md bg-blue-800 px-2 py-1 text-center"
          >
            All Issues
          </Link>

          <button className="cursor-pointer rounded-md bg-blue-800 px-2 py-1">
            My Issues
          </button>
        </div>

        {/* ADD ISSUE */}
        <div>
          <button className="cursor-pointer rounded-md bg-blue-800 px-2 py-1">
            Add New Issue
          </button>
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
