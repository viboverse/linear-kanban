import { Task } from "@prisma/client";
import { Plus } from "lucide-react";
import { TaskCard } from "./task-card";

type ColumnProps = {
  title: "Todo" | "In Progress" | "Done";
  tasks: Task[];
};

export default function Column({ title, tasks }: ColumnProps) {
  return (
    <div className="flex flex-col justify-baseline rounded-2xl bg-red-950">
      <header className="mb-2 flex w-full justify-between rounded-b-2xl border-b-2 bg-stone-900 px-4 py-2">
        <h2>
          {title} ({tasks.length})
        </h2>
        <Plus className="cursor-pointer" />
      </header>

      <ul className="max-h-[calc(100vh-100px)] overflow-y-auto">
        <li className="flex flex-wrap items-center justify-center gap-1">
          {tasks.map((task: Task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </li>
      </ul>
    </div>
  );
}
