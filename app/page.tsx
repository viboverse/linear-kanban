import Headerbar from "../components/header-bar";
import { Board } from "@/components/board";
import TaskList from "@/components/taks-list";
import { MOCK_TASKS } from "@/lib/tasks";

import { Priority } from "@prisma/client";
import { use } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = use(searchParams);

  function filterTasks(priority: Priority) {
    if (!priority) return MOCK_TASKS;

    return MOCK_TASKS.filter((task) => task.priority === priority);
  }

  return (
    <main className="w-full bg-neutral-950 text-white">
      <div className="flex flex-col">
        <Headerbar />

        {/* The Main Board/List */}
        <div className="h-screen bg-zinc-800 px-6">
          {/* List view */}
          {params.view === "list" && (
            <>
              <div className="my-6 px-8">
                <h1 className="mb-1">Task List</h1>
                <p className="text-sm text-gray-200">
                  Manage your tasks with priority, status, and due dates
                </p>
              </div>
              <TaskList tasks={filterTasks(params.filter as Priority)} />
            </>
          )}

          {/* Board View */}
          {params.view === "board" && <Board tasks={MOCK_TASKS} />}
        </div>
      </div>
    </main>
  );
}
