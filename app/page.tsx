import SideBarNav from "@/components/sidebar-nav";
import { TaskCard } from "@/components/task-card";
import { Task } from "@prisma/client";

const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Fix the navigation bug",
    description: "The menu doesn't open on mobile",
    status: "TODO",
    priority: "HIGH",
    order: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "2",
    title: "Design new landing page",
    description: null,
    status: "IN_PROGRESS",
    priority: "MEDIUM",
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "3",
    title: "Update documentation",
    description: "Add the new API endpoints",
    status: "DONE",
    priority: "LOW",
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "4",
    title: "Refactor database schema",
    description: null,
    status: "TODO",
    priority: "HIGH",
    order: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 bg-neutral-950">
      <SideBarNav />
      {MOCK_TASKS.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </main>
  );
}
