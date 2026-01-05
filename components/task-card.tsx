import deleteIssue from "@/actions/deleteIssue";
import { Priority, Task } from "@prisma/client";
import { ConfirmationModal } from "./modal/delete-confirmation-dialog";
import EditIssueDialog from "./modal/edit-issue-dialog";
import { Calendar, Flag, GripVertical } from "lucide-react";
import { useDraggable } from "@dnd-kit/core";
import { toLittleCase } from "@/utils/toLowerCase";

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

export function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: task.id,
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`group flex h-full w-full items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/80 px-6 py-4 transition-transform hover:scale-101 hover:bg-zinc-800 ${isDragging ? "z-50 shadow-2xl" : ""}`}
    >
      <button
        {...listeners}
        {...attributes}
        className="absolute left-1.5 cursor-grabbing touch-none text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-80 active:cursor-grabbing"
      >
        <GripVertical size={14} />
      </button>

      <div className="flex w-full flex-col gap-4 pl-3">
        {/* Title & Setting */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h3 className="line-clamp-2 text-sm font-medium break-all text-zinc-100">
              {task.title}
            </h3>
          </div>

          <div className="flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <EditIssueDialog task={task} taskId={task.id} />
            <ConfirmationModal taskId={task.id} deleteAction={deleteIssue} />
          </div>
        </div>

        {/* Priority & Created Date*/}
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-2 rounded-sm border px-2 py-1 ${getPriorityColor(task.priority)}`}
          >
            <Flag size={14} />
            <span className="text-xs font-semibold">
              {toLittleCase(task.priority)}
            </span>
          </div>

          {task.dueDate && (
            <span className="flex items-center gap-2 text-xs text-zinc-400">
              <Calendar size={12} />
              <span>
                {task.dueDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
