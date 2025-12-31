"use client";

import { Pencil } from "lucide-react";
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
import { useActionState, useEffect, useState } from "react";
import { updateIssue } from "@/actions/updateIssue";
import { Task } from "@prisma/client";
import { toast } from "sonner";

export default function EditIssueDialog({
  task,
  taskId,
}: {
  task: Task;
  taskId: string;
}) {
  const [state, formAction, isPending] = useActionState(updateIssue, null);
  const [open, setOpen] = useState(false);

  const formatDateForInput = (date: Date | null) => {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    function handleCloseModal() {
      if (state?.success) {
        toast.success(state.message);
        setOpen(false);
      }

      if (state?.success === false) {
        toast.error(state.message);
      }
    }

    handleCloseModal();
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* The button in sidebar-nav */}
      <DialogTrigger asChild>
        <Button className="cursor-pointer bg-zinc-950">
          <Pencil size={12} className="hover:cursor-pointer" />
        </Button>
      </DialogTrigger>

      {/* The modal */}
      <DialogContent className="sm:max-w-[425px]">
        <form action={formAction}>
          <input type="hidden" name="issueId" value={taskId} />
          <DialogHeader>
            <DialogTitle className="mb-4">Edit Issue</DialogTitle>
          </DialogHeader>

          {/* Title */}
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={task.title} />
            </div>
            {/* Priority & Due Date*/}
            <div className="flex items-center justify-between">
              {/* Priority */}
              <div className="flex flex-col gap-3">
                <Label>Priority</Label>
                <select
                  defaultValue={task.priority}
                  name="priority"
                  className="group:cursor-pointer flex h-8 w-36 rounded-md border bg-red-50 px-2 shadow-2xl"
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              </div>

              {/* Due Date  */}
              <div className="flex flex-col gap-3">
                <Label>Due Date</Label>
                <Input
                  defaultValue={formatDateForInput(task.dueDate)}
                  type="date"
                  name="dueDate"
                  className="flex h-8 w-36 cursor-pointer items-center rounded-md border px-2 shadow-2xl"
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={task.description || ""}
              />
            </div>
          </div>

          {/* Dialog Footer */}
          <DialogFooter className="mt-6">
            <Button
              type="submit"
              variant="outline"
              className="cursor-pointer bg-green-400"
              disabled={isPending}
            >
              {isPending ? "Saving..." : "Update Issue"}
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
