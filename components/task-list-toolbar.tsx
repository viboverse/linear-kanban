import SearchInput from "./search-input";
import FilterButton from "./filter-button";

export default async function TaskListToolbar() {
  return (
    <div className="mb-4 border-b border-zinc-100/20">
      <div className="my-6 flex items-center justify-between px-8">
        <div>
          <h1 className="mb-1">Task List</h1>
          <p className="text-sm text-gray-200">
            Manage your tasks with priority, status, and due dates
          </p>
        </div>
        <div className="flex gap-4">
          <SearchInput />
          <FilterButton />
        </div>
      </div>
    </div>
  );
}
