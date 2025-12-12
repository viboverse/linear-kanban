import Headerbar from "../components/header-bar";
import { Board } from "@/components/board";
import { TaskCard } from "@/components/task-card";

import { Priority, Task } from "@prisma/client";
import { use } from "react";

export const MOCK_TASKS: Task[] = [
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
  {
    id: "5",
    title: "Implement user authentication",
    description: "Login and signup with JWT",
    status: "IN_PROGRESS",
    priority: "HIGH",
    order: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "6",
    title: "Optimize images",
    description: "Compress hero section images",
    status: "TODO",
    priority: "MEDIUM",
    order: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "7",
    title: "Add dark mode",
    description: null,
    status: "TODO",
    priority: "LOW",
    order: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "8",
    title: "Set up CI pipeline",
    description: "GitHub Actions workflow",
    status: "IN_PROGRESS",
    priority: "HIGH",
    order: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "9",
    title: "Fix checkout validation",
    description: "Prevent empty form submission",
    status: "TODO",
    priority: "HIGH",
    order: 8,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "10",
    title: "Improve SEO",
    description: "Add meta tags",
    status: "DONE",
    priority: "MEDIUM",
    order: 9,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "11",
    title: "Create admin dashboard",
    description: null,
    status: "TODO",
    priority: "HIGH",
    order: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "12",
    title: "Add unit tests",
    description: "Cover auth service",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
    order: 11,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "13",
    title: "Upgrade dependencies",
    description: null,
    status: "TODO",
    priority: "LOW",
    order: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "14",
    title: "Create error boundaries",
    description: "Handle app crashes gracefully",
    status: "TODO",
    priority: "MEDIUM",
    order: 13,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "15",
    title: "Implement notifications",
    description: "Toast messages for actions",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
    order: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "16",
    title: "Add user profile page",
    description: null,
    status: "TODO",
    priority: "MEDIUM",
    order: 15,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "17",
    title: "Integrate payment gateway",
    description: "Stripe integration",
    status: "TODO",
    priority: "HIGH",
    order: 16,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "18",
    title: "Improve accessibility",
    description: "ARIA labels and contrast",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
    order: 17,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "19",
    title: "Add loading skeletons",
    description: null,
    status: "TODO",
    priority: "LOW",
    order: 18,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "20",
    title: "Fix memory leak",
    description: "Uncleared intervals",
    status: "TODO",
    priority: "HIGH",
    order: 19,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "21",
    title: "Add search feature",
    description: "Search tasks by title",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
    order: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "22",
    title: "Implement drag and drop",
    description: "Reorder tasks visually",
    status: "TODO",
    priority: "MEDIUM",
    order: 21,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "23",
    title: "Add pagination",
    description: null,
    status: "TODO",
    priority: "LOW",
    order: 22,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
  {
    id: "24",
    title: "Create export feature",
    description: "Download tasks as CSV",
    status: "DONE",
    priority: "LOW",
    order: 23,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "user_1",
  },
];

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = use(searchParams);
  // const view = use(searchParams).view;

  function filterTasks(priority: Priority) {
    if (!priority) return MOCK_TASKS;
    return MOCK_TASKS.filter((task) => task.priority === priority);
  }

  console.log(params.filter);

  return (
    <main className="w-full overflow-hidden bg-neutral-950 text-white">
      <div className="flex flex-col">
        <Headerbar />

        {/* List view */}
        {params.view === "list" && (
          <ul>
            {filterTasks(params.filter as Priority).map((task) => (
              <li key={task.id}>
                <TaskCard task={task} />
              </li>
            ))}
          </ul>
        )}

        {/* Board View */}
        {params.view === "board" && <Board tasks={MOCK_TASKS} />}
      </div>
    </main>
  );
}
