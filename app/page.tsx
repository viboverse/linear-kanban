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
  const priority = (params.priority as string) || "";
  const status = (params.status as string) || "";
  const dueDate = (params.duedate as string) || "";

  let filteredTasks = userIssues;

  // Apply search filter
  if (search) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Apply priority filter
  if (priority) {
    filteredTasks = filteredTasks.filter((task) =>
      task.priority.includes(priority),
    );
  }

  // Apply status filter
  if (status) {
    filteredTasks = filteredTasks.filter((task) =>
      task.status.includes(status),
    );
  }

  // Apply date sorting (this should be LAST)
  if (dueDate) {
    filteredTasks = filteredTasks.toSorted((a, b) => {
      // Handle null dates - put them at the end
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1; // a goes to end
      if (!b.dueDate) return -1; // b goes to end

      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();

      if (dueDate === "ascending") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
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
          {params.view === "board" && <Board tasks={filteredTasks} />}
        </div>
      </div>
    </main>
  );
}
