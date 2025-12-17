import deleteIssue from "@/actions/deleteIssue";
import { Priority, Task } from "@prisma/client";
import { Pencil } from "lucide-react";
import { ConfirmationModal } from "./delete-confirmation-modal";

function getPriorityColor(priority: Priority) {
  switch (priority) {
    case "LOW":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "MEDIUM":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "HIGH":
      return "bg-red-100 text-red-700 border-red-200";
  }
}

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="flex h-full w-80 flex-col gap-4 rounded-2xl border border-gray-800 bg-neutral-900 px-6 py-4 hover:cursor-grab hover:bg-neutral-800">
      {/* Title & Setting */}
      <div className="flex items-center justify-between">
        <h4 className="line-clamp-2 text-sm leading-tight font-semibold">
          {task.title}
        </h4>
        <Pencil size={12} className="hover:cursor-pointer" />
        <ConfirmationModal taskId={task.id} deleteAction={deleteIssue} />
      </div>

      {/* Priority & Created Date*/}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full border px-2 py-1 text-[10px] font-bold ${getPriorityColor(task.priority)}`}
        >
          {task.priority}
        </span>

        <span className="text-[15px] text-neutral-400">
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
