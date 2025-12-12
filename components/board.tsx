import Column from "./column";
import { Task } from "@prisma/client";

export function Board({ tasks }: { tasks: Task[] }) {
  const todoTasks = tasks.filter((task) => task.status === "TODO");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const doneTasks = tasks.filter((task) => task.status === "TODO");

  return (
    <div className="grid h-screen w-full grid-cols-3 gap-2 bg-blue-600 px-1">
      <Column title="Todo" tasks={doneTasks} />
      <Column title="In Progress" tasks={inProgressTasks} />
      <Column title="Done" tasks={todoTasks} />
    </div>
  );
}
