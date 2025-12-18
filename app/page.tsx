import { ListFilter } from "lucide-react";
import getIssues from "@/actions/getIssues";
import Headerbar from "../components/header-bar";
import { Board } from "@/components/board";
import TaskList from "@/components/taks-list";
import { MOCK_TASKS } from "@/lib/tasks";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const userIssues = await getIssues();

  return (
    <main className="w-full text-white">
      <div className="mt-2 flex flex-col">
        <Headerbar />

        {/* The Main Board/List */}
        <div className="min-h-screen bg-zinc-800/30">
          {/* List view */}
          {params.view === "list" && (
            <>
              <div className="mb-4 border-b border-zinc-100/20">
                <div className="my-6 flex items-center justify-between px-8">
                  <div>
                    <h1 className="mb-1">Task List</h1>
                    <p className="text-sm text-gray-200">
                      Manage your tasks with priority, status, and due dates
                    </p>
                  </div>
                  <button className="flex items-center gap-2 rounded-md bg-zinc-600 px-4 py-2 hover:cursor-pointer">
                    <ListFilter />
                    <Link href="/?view=list&filter=HIGH">Filter High</Link>
                  </button>
                </div>
              </div>
              {/* <TaskList tasks={filterTasks(params.filter as Priority)} /> */}
              <TaskList tasks={MOCK_TASKS} />
            </>
          )}

          {/* Board View */}
          {params.view === "board" && <Board tasks={MOCK_TASKS} />}
        </div>
      </div>
    </main>
  );
}
