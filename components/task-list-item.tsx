import { Priority, Task } from "@prisma/client";
import { Tag } from "lucide-react";

type TaskListProp = Pick<Task, "title" | "status" | "priority" | "dueDate">;
export default function TaskListItem({
  title,
  status,
  priority,
  dueDate,
}: TaskListProp) {
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
  return (
    <li className="space-y-4 rounded-lg bg-gray-700 px-6 py-2">
      <div className="flex items-center justify-between">
        <h2>{title}</h2>

        <span className="flex max-w-sm rounded-2xl bg-gray-800 px-4">
          Status: {status}
        </span>
        <div className="space-x-4">
          <span
            className={`rounded-full border px-2 py-1 text-[10px] font-bold ${getPriorityColor(priority)}`}
          >
            {priority}
          </span>
          <span>{dueDate ? dueDate.toLocaleDateString() : "No due date"}</span>
        </div>
      </div>

      <div></div>

      {/* Labels */}
      <div>
        <Tag className="size-4" />
      </div>
    </li>
  );
}
