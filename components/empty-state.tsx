import { ClipboardList } from "lucide-react";
import NewIssueDialog from "./modal/new-issues-dialog";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <ClipboardList className="h-10 w-10 text-gray-400" />
      </div>

      <h3 className="mb-2 text-gray-900">No tasks yet</h3>
      <p className="mb-6 max-w-sm text-center text-sm text-gray-500">
        Get started by creating your first task. Stay organized and keep track
        of your work.
      </p>

      <div>
        <NewIssueDialog />
      </div>
    </div>
  );
}
