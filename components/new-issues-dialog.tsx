import { CirclePlus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PriorityDropdown from "./prority-dropdown";
import DueDatePicker from "./due-date-picker";

export default function NewIssueDialog() {
  return (
    <Dialog>
      <form>
        {/* The Add New Issue Button */}
        <DialogTrigger asChild>
          <Button className="bg-purple-700 px-4" variant="outline">
            <CirclePlus />
            Add New Issue
          </Button>
        </DialogTrigger>

        {/* Dialog */}
        <DialogContent className="sm:max-w-[425px]">
          {/* Dialog Header */}
          <DialogHeader>
            <DialogTitle>Add New Issue</DialogTitle>
          </DialogHeader>

          {/* Dialog Inputs */}
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" />
            </div>

            {/* Priority & Due Date  */}
            <div className="flex items-center justify-between">
              <PriorityDropdown />

              <DueDatePicker />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>
          </div>

          {/* Dialog Button */}
          <DialogFooter>
            <Button
              type="submit"
              variant="outline"
              className="cursor-pointer bg-green-600"
            >
              Save changes
            </Button>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer bg-red-600">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
