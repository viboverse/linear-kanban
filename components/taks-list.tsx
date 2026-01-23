"use client";

import { Suspense } from "react";
import { Task } from "@/generated/prisma/client";
import { useSearchParams } from "next/navigation";
import EmptyState from "./empty-state";
import TaskListItem from "./task-list-item";

function TaskListInner({ tasks }: { tasks: Task[] }) {
  const params = useSearchParams();
  const filter = params.get("filter");

  // Filter tasks based on URL param
  const filteredTasks =
    filter === "HIGH"
      ? tasks.filter((task) => task.priority === "HIGH")
      : tasks;

  if (filteredTasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="flex flex-col gap-2 px-6">
      {filteredTasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <Suspense
      fallback={<div className="h-10 w-80 animate-pulse rounded bg-zinc-700" />}
    >
      <TaskListInner tasks={tasks} />
    </Suspense>
  );
}
