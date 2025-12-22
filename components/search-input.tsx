"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(
    searchParams.get("search") || "",
  );

  // Debounced search (updates URL after user stops typing)
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
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(timer);
  }, [inputValue, router, searchParams]);

  return (
    <div className="relative">
      <Search
        className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400"
        size={18}
      />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Search issues..."
        className="w-60 rounded-lg border border-zinc-600 py-2 pr-4 pl-10 text-sm focus:border-transparent focus:ring focus:ring-zinc-400 focus:outline-none"
      />
    </div>
  );
}
