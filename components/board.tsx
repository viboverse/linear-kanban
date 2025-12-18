import Column from "./column";
import { Task } from "@prisma/client";

export function Board({ tasks }: { tasks: Task[] }) {
  const todoTasks = tasks.filter((task) => task.status === "TODO");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const doneTasks = tasks.filter((task) => task.status === "DONE");

  return (
    <div className="grid min-h-screen w-full grid-cols-3 gap-2 px-2 py-4">
      <Column title="Todo" tasks={todoTasks} />
      <Column title="In Progress" tasks={inProgressTasks} />
      <Column title="Done" tasks={doneTasks} />
    </div>
  );
}
