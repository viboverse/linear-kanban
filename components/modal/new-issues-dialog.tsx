"use client";

import { CirclePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addNewIssue } from "@/actions/addNewIssue";
import { useActionState, useEffect, useState } from "react";

export default function NewIssueDialog() {
  const [state, formAction, isPending] = useActionState(addNewIssue, null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleCloseModal() {
      if (state?.success) {
        setOpen(false);
      }
    }

    handleCloseModal();
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* The button in sidebar-nav */}
      <DialogTrigger asChild>
        <Button className="bg-purple-700 px-4" variant="outline">
          <CirclePlus />
          Add New Issue
        </Button>
      </DialogTrigger>

      {/* The modal */}
      <DialogContent className="sm:max-w-[425px]">
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle className="mb-4">Add New Issue</DialogTitle>
          </DialogHeader>

          {/* Title */}
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" />
            </div>
            {/* Priority & Due Date*/}
            <div className="flex items-center justify-between">
              {/* Priority */}
              <div className="flex flex-col gap-3">
                <Label>Priority</Label>
                <select
                  className="group:cursor-pointer flex h-8 w-36 rounded-md border bg-red-50 px-2 shadow-2xl"
                  name="priority"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* Due Date  */}
              <div className="flex flex-col gap-3">
                <Label>Due Date</Label>
                <Input
                  type="date"
                  name="dueDate"
                  className="flex h-8 w-36 cursor-pointer items-center rounded-md border px-2 shadow-2xl"
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>

            {state && (
              <p
                className={`mb-4 rounded-md p-3 text-sm ${
                  state.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {state.message}
              </p>
            )}
          </div>

          {/* Dialog Footer */}
          <DialogFooter className="mt-6">
            <Button
              type="submit"
              variant="outline"
              className="cursor-pointer bg-green-400"
              disabled={isPending}
            >
              {isPending ? "Saving..." : "Create Issue"}
            </Button>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer bg-red-600">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
