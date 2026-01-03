"use client";

import { Task } from "@prisma/client";
import { TaskCard } from "./task-card";
import { ScrollArea } from "./ui/scroll-area";
import { useDroppable } from "@dnd-kit/core";
import NewIssueDialog from "./modal/new-issues-dialog";
import { ReactNode } from "react";

type ColumnProps = {
  title: "Todo" | "In Progress" | "Done";
  status: "TODO" | "IN_PROGRESS" | "DONE";
  tasks: Task[];
  icon: ReactNode;
};

export default function Column({ title, tasks, status, icon }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[400px] flex-col gap-2 rounded-sm bg-zinc-950/80 shadow-2xl transition-colors ${
        isOver ? "bg-zinc-900/90 ring-2 ring-green-500/50" : ""
      }`}
    >
      <div className="flex w-full justify-between rounded-t-md border-b border-zinc-400/20 bg-zinc-950/80 px-6 py-2">
        <div className="flex items-center justify-center gap-2">
          {icon}
          <h2>{title}</h2>
          <p className="text-zinc-400">({tasks.length})</p>
        </div>
      </div>

      <ScrollArea>
        <ul className="flex max-h-[calc(100vh-100px)] flex-wrap items-center justify-center gap-2 pr-3 pl-2">
          {tasks.length === 0 ? (
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-md text-zinc-300">No tasks in this column</p>
                <p className="text-sm text-zinc-500">
                  Drag tasks here or create a new one
                </p>
              </div>
              <NewIssueDialog />
            </div>
          ) : (
            tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
          )}
        </ul>
      </ScrollArea>
    </div>
  );
}
