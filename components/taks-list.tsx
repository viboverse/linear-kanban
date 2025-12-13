import { Task } from "@prisma/client";
import TaskListItem from "./task-list-item";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul className="flex flex-col gap-2 bg-gray-900">
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          title={task.title}
          dueDate={task.dueDate}
          priority={task.priority}
          status={task.status}
        />
      ))}
    </ul>
  );
}
