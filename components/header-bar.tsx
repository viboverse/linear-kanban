import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Calendar, Search } from "lucide-react";
import SearchInput from "./search-input";

export default async function Headerbar({ view }: { view: "board" | "list" }) {
  const user = await currentUser();

  // Get current date
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-sm">
      <section className="flex h-16 w-full items-center justify-between px-6">
        {/* Left: Greeting & Date */}
        <div className="flex flex-col gap-0.5">
          <h1 className="text-base font-semibold text-zinc-100">
            Hello, {user?.firstName}!
          </h1>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Calendar size={12} />
            <span>{today}</span>
          </div>
        </div>

        {/* Center: Search (optional) */}
        {view === "list" && (
          <div className="hidden flex-1 justify-center md:flex">
            <div className="relative w-full max-w-md">
              <Search
                size={16}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
              />
              <SearchInput />
            </div>
          </div>
        )}

        {/* Right: Actions & User */}
        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton>
              <button className="rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="rounded-md bg-[#6c47ff] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5c3fdf]">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            {/* Divider */}
            <div className="mx-2 h-8 w-px bg-zinc-800" />

            {/* User Info + Avatar */}
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-zinc-200">
                  {user?.fullName || user?.username}
                </p>
                <p className="text-xs text-zinc-500">
                  {user?.emailAddresses[0]?.emailAddress}
                </p>
              </div>

              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "!h-10 !w-10 ring-2 ring-zinc-700 hover:ring-green-400 transition-all",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </section>
    </header>
  );
}
