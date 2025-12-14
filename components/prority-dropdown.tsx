"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function PriorityDropdown() {
  const [isLow, setIsLow] = useState<Checked>(true);
  const [isMedium, setIsMedium] = useState<Checked>(false);
  const [isHigh, setIsHigh] = useState<Checked>(false);

  const selectedPriority = isHigh ? "High" : isMedium ? "Medium" : "Low";

  return (
    <div className="grid gap-2">
      <Label className="px-1" htmlFor="priority">
        Priority
      </Label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-36 justify-start text-left font-normal"
            id="priority"
          >
            {selectedPriority}
            <ChevronDownIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 border-gray-700 bg-zinc-800">
          <DropdownMenuCheckboxItem
            checked={isLow}
            onCheckedChange={(checked) => {
              setIsLow(checked);
              setIsMedium(false);
              setIsHigh(false);
            }}
            className="cursor-pointer text-white hover:bg-zinc-700"
          >
            Low
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={isMedium}
            onCheckedChange={(checked) => {
              setIsMedium(checked);
              setIsLow(false);
              setIsHigh(false);
            }}
            className="cursor-pointer text-white hover:bg-zinc-700"
          >
            Medium
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={isHigh}
            onCheckedChange={(checked) => {
              setIsHigh(checked);
              setIsLow(false);
              setIsMedium(false);
            }}
            className="cursor-pointer text-white hover:bg-zinc-700"
          >
            High
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
