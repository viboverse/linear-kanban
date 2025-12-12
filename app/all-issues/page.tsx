import { TaskCard } from "@/components/task-card";
import { MOCK_TASKS } from "../page";

export default function AllIssues() {
  return (
    <div>
      <div>
        <h1>ALL ISSEUS</h1>
      </div>

      <div>
        <ul>
          {MOCK_TASKS.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
