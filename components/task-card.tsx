import deleteIssue from "@/actions/deleteIssue";
import { Priority, Task } from "@prisma/client";
import { ConfirmationModal } from "./modal/delete-confirmation-dialog";
import EditIssueDialog from "./modal/edit-issue-dialog";
import { GripVertical } from "lucide-react";
import { useDraggable } from "@dnd-kit/core";

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
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: task.id,
  });

  const style = {
    // transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`flex h-full w-full flex-col rounded-sm border border-green-700/30 bg-zinc-700 px-6 py-4 transition-transform hover:scale-101 hover:border-green-700 hover:bg-zinc-800 ${isDragging ? "z-50 shadow-2xl" : ""}`}
    >
      {/* Title & Setting */}
      <div className="flex items-center justify-between">
        <button
          {...listeners}
          {...attributes}
          className="cursor-grabbing touch-none hover:text-green-500 active:cursor-grabbing"
        >
          <GripVertical size={18} />
        </button>
        <h4 className="line-clamp-2 text-sm leading-tight font-semibold">
          {task.title}
        </h4>
        <div className="flex gap-1">
          <EditIssueDialog task={task} taskId={task.id} />
          <ConfirmationModal taskId={task.id} deleteAction={deleteIssue} />
        </div>
      </div>

      {/* Priority & Created Date*/}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full border px-2 py-1 text-[10px] font-bold ${getPriorityColor(task.priority)}`}
        >
          {task.priority}
        </span>

        <span className="text-[15px] text-neutral-400">
          {task.dueDate === null
            ? "No Due Date!"
            : task.dueDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
        </span>
      </div>
    </li>
  );
}
