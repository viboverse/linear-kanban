"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// The inner component that uses useSearchParams
function SearchInputInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState(
    searchParams.get("search") || "",
  );

  // Debounced search (500ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (inputValue) {
        params.set("search", inputValue);
      } else {
        params.delete("search");
      }

      params.set("view", "list");
      router.replace(`/?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [router, inputValue]);

  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      type="text"
      placeholder="Search issues..."
      className="w-80 rounded-lg border border-zinc-700 bg-zinc-800/80 py-2 pr-4 pl-10 text-sm text-zinc-200 placeholder-zinc-500 transition-all outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
    />
  );
}

// Wrap with Suspense
export default function SearchInput() {
  return (
    <Suspense
      fallback={
        <input
          disabled
          type="text"
          placeholder="Search issues..."
          className="w-80 rounded-lg border border-zinc-700 bg-zinc-800/80 py-2 pr-4 pl-10 text-sm text-zinc-200 placeholder-zinc-500"
        />
      }
    >
      <SearchInputInner />
    </Suspense>
  );
}
