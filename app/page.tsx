import getIssues from "@/actions/getIssues";
import Headerbar from "../components/header-bar";
import { Board } from "@/components/board";
import TaskList from "@/components/taks-list";
import TaskListToolbar from "@/components/task-list-toolbar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const userIssues = await getIssues();

  const search = (params.search as string) || "";
  let filteredTasks = userIssues;

  if (search) {
    filteredTasks = userIssues.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <main className="w-full text-white">
      <div className="mt-2 flex flex-col">
        <Headerbar />

        {/* The Main Board/List */}
        <div className="min-h-screen bg-zinc-800/30">
          {/* List view */}
          {params.view === "list" && (
            <div>
              <TaskListToolbar />

              <TaskList tasks={filteredTasks} />
            </div>
          )}

          {/* Board View */}
          {params.view === "board" && <Board tasks={userIssues} />}
        </div>
      </div>
    </main>
  );
}
