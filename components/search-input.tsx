"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.replace(`/?view=list&search=${inputValue}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        onChange={handleSearchInput}
        value={inputValue}
        type="text"
        placeholder="Search issues..."
        className="w-60 rounded-lg border border-zinc-600 py-2 pr-4 pl-4 text-sm focus:border-transparent focus:ring focus:ring-zinc-400 focus:outline-none"
      />

      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white"
      >
        <Search size={18} />
      </button>
    </form>
  );
}
