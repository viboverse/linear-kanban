"use client";

import { Task } from "@prisma/client";
import { Plus } from "lucide-react";
import { TaskCard } from "./task-card";
import { ScrollArea } from "./ui/scroll-area";
import { useDroppable } from "@dnd-kit/core";

type ColumnProps = {
  title: "Todo" | "In Progress" | "Done";
  status: "TODO" | "IN_PROGRESS" | "DONE";
  tasks: Task[];
};

export default function Column({ title, tasks, status }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className="flex min-h-[400px] flex-col justify-baseline gap-2 rounded-sm bg-zinc-950/80 shadow-2xl"
    >
      <div className="flex w-full justify-between rounded-t-md border-b border-zinc-400/20 bg-zinc-950/80 px-6 py-2">
        <h2 className="flex gap-2">
          {title} <p className="text-zinc-400">({tasks.length})</p>
        </h2>
        <Plus className="cursor-pointer" />
      </div>

      <ScrollArea>
        <ul className="max-h-[calc(100vh-100px)] pr-3 pl-2">
          {tasks.length === 0 ? (
            <p className="text-center">No tasks in thie columns!</p>
          ) : (
            <li className="flex flex-wrap items-center justify-center gap-2">
              {tasks.map((task: Task) => (
                <TaskCard task={task} key={task.id} />
              ))}
            </li>
          )}
        </ul>
      </ScrollArea>
    </div>
  );
}
