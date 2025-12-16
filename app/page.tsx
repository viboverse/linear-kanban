import getIssues from "@/actions/getIssues";
import Headerbar from "../components/header-bar";
import { Board } from "@/components/board";
import TaskList from "@/components/taks-list";
import { MOCK_TASKS } from "@/lib/tasks";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const userIssues = await getIssues();

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
              {/* <TaskList tasks={filterTasks(params.filter as Priority)} /> */}
              <TaskList tasks={MOCK_TASKS} />
            </>
          )}

          {/* Board View */}
          {params.view === "board" && <Board tasks={userIssues} />}
        </div>
      </div>
    </main>
  );
}
