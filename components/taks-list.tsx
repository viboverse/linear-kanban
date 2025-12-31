"use client";

import { Task } from "@prisma/client";
import TaskListItem from "./task-list-item";
import { useSearchParams } from "next/navigation";

type TaskListProp = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProp) {
  const params = useSearchParams();
  const filter = params.get("filter");

  // Filter tasks based on URL param
  const filteredTasks =
    filter === "HIGH"
      ? tasks.filter((task) => task.priority === "HIGH")
      : tasks;

  if (filteredTasks.length === 0) {
    return <p className="text-center font-bold">No Tasks yet!</p>;
  }

  return (
    <ul className="flex flex-col gap-2 px-6">
      {filteredTasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
