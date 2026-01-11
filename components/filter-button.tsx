"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Priority, Status } from "@/generated/prisma/client";
import { Filter } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterButton() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleFilter(
    filterBy: "priority" | "status" | "duedate",
    selectedOption: Priority | Status | "ascending" | "descending",
  ) {
    const params = new URLSearchParams(searchParams.toString());

    if (filterBy === "priority") {
      params.set("priority", selectedOption);
    }

    if (filterBy === "status") {
      params.set("status", selectedOption);
    }

    if (filterBy === "duedate") {
      params.set("duedate", selectedOption);
    }
    router.replace(`/?${params.toString()}`);
  }

  function clearFilter() {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("priority");
    params.delete("status");
    router.replace(`/?${params.toString()}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="cursor-pointer gap-2 bg-zinc-700">
          <Filter size={16} />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Filter By:</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {/* Priority Filter */}
          {/* <button onClick={handleFilter}>Filter</button> */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Priority</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="bg-zinc-700">
                <DropdownMenuItem
                  onSelect={() => handleFilter("priority", "HIGH")}
                  className={`${
                    searchParams.get("priority") === "HIGH"
                      ? "bg-blue-100 font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  High
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => handleFilter("priority", "MEDIUM")}
                  className={`${
                    searchParams.get("priority") === "MEDIUM"
                      ? "bg-blue-100 font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  Medium
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => handleFilter("priority", "LOW")}
                  className={`${
                    searchParams.get("priority") === "LOW"
                      ? "bg-blue-100 font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  Low
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Status Filter */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onSelect={() => handleFilter("status", "TODO")}
                  className={`${
                    searchParams.get("status") === "TODO"
                      ? "bg-blue-100 font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  Todo
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => handleFilter("status", "IN_PROGRESS")}
                  className={`${
                    searchParams.get("status") === "IN_PROGRESS"
                      ? "bg-blue-100 font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  In Progress
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => handleFilter("status", "DONE")}
                  className={`${
                    searchParams.get("status") === "DONE"
                      ? "bg-blue-100 font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  Done
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Due Date Filter */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Due Date</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onSelect={() => handleFilter("duedate", "ascending")}
                  className={`${
                    searchParams.get("duedate") === "ascending"
                      ? "bg-blue-100 font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  Ascending
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => handleFilter("duedate", "descending")}
                  className={`${
                    searchParams.get("duedate") === "descending"
                      ? "bg-blue-100 font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  Descending
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600" onClick={clearFilter}>
          Clear All Filters
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
