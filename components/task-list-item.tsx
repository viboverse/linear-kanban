import { toLittleCase } from "@/utils/toLowerCase";
import { Priority, Status, Task } from "@/generated/prisma/client";
import EditIssueDialog from "./modal/edit-issue-dialog";
import { ConfirmationModal } from "./modal/delete-confirmation-dialog";

import deleteIssue from "@/actions/deleteIssue";
import { Calendar, CheckCircle2, Circle, Clock, Flag } from "lucide-react";
import { ReactNode } from "react";

export default function TaskListItem({ task }: { task: Task }) {
  function getPriorityColor(priority: Priority) {
    switch (priority) {
      case "LOW":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "MEDIUM":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "HIGH":
        return " bg-red-500/20 text-red-400 border-red-500/30";
    }
  }

  function getStatusConfig(status: Status): ReactNode {
    if (status === "TODO") {
      return <Circle className="h-4 w-4 text-zinc-400 hover:animate-pulse" />;
    }

    if (status === "IN_PROGRESS") {
      return <Clock className="h-4 w-4 text-orange-400 hover:animate-pulse" />;
    }

    if (status === "DONE") {
      return (
        <CheckCircle2 className="h-4 w-4 text-green-400 hover:animate-pulse" />
      );
    }
  }

  return (
    <li className="group h-full w-full items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-3 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800/50">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <span>{getStatusConfig(task.status)}</span>

          <span className="flex items-center">
            <h2 className="line-clamp-2 text-sm font-medium break-all text-zinc-100">
              {task.title}
            </h2>
          </span>
        </div>

        {/* TasK Status */}
        <div className="flex items-center gap-4">
          <div>
            <span className="hidden items-center gap-1.5 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400 sm:flex">
              {toLittleCase(task.status)}
            </span>
          </div>

          {/* TasK Priority */}
          <div
            className={`flex items-center gap-2 rounded-sm border px-2 py-1 ${getPriorityColor(task.priority)}`}
          >
            <Flag size={14} />
            <span className="text-xs font-semibold">
              {toLittleCase(task.priority)}
            </span>
          </div>

          {/* Due Date */}
          <span className="flex w-28 items-center gap-2 text-xs text-zinc-400">
            <Calendar size={12} />
            <span>
              {task.dueDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </span>

          <span className="space-x-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <EditIssueDialog task={task} taskId={task.id} />
            <ConfirmationModal taskId={task.id} deleteAction={deleteIssue} />
          </span>
        </div>
      </div>
    </li>
  );
}
