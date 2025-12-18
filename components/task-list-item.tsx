import { Priority, Task } from "@prisma/client";
import { Tag } from "lucide-react";

export default function TaskListItem({ task }: { task: Task }) {
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
    <li className="space-y-4 rounded-lg border border-green-700/30 bg-zinc-700/30 px-6 py-2 transition-transform hover:scale-101 hover:border-green-700/80 hover:bg-zinc-800/40">
      <div className="flex items-center justify-between">
        <h2>{task.title}</h2>

        <span className="flex max-w-sm gap-2 rounded-sm bg-zinc-950 px-4">
          <p className="text-zinc-200">Status:</p>
          <p className="text-zinc-400">{task.status.toLowerCase()}</p>
        </span>
        <div className="space-x-4">
          <span
            className={`rounded-full border px-2 py-1 text-[10px] font-bold ${getPriorityColor(task.priority)}`}
          >
            {task.priority}
          </span>
          <span>
            {task.dueDate ? task.dueDate.toLocaleDateString() : "No due date"}
          </span>
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
