"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { useState, useTransition } from "react";
import Column from "./column";
import { Status, Task } from "@prisma/client";
import updateTaskStatus from "@/actions/updateTaskStatus";
import { TaskCard } from "./task-card";

export function Board({ tasks: initialTasks }: { tasks: Task[] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [isPending, startTransition] = useTransition();
  const [activeTask, setActiveTask] = useState<Task | null>(null); // Track dragged task

  function handleFilterTasks(status: Status): Task[] {
    return tasks
      .filter((task) => task.status === status)
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
  }

  function handleDragStart(event: DragStartEvent) {
    const taskId = event.active.id as string;
    const task = tasks.find((t) => t.id === taskId);
    setActiveTask(task || null);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveTask(null); // Clear active task

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Status;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId && task.status !== newStatus
          ? { ...task, status: newStatus, updatedAt: new Date() }
          : task,
      ),
    );

    startTransition(async () => {
      await updateTaskStatus(taskId, newStatus);
    });
  }

  return (
    <DndContext
      onDragStart={handleDragStart} // Add this
      onDragEnd={handleDragEnd}
    >
      <div className="grid min-h-screen w-full grid-cols-3 gap-2 px-2 py-4">
        <Column status="TODO" title="Todo" tasks={handleFilterTasks("TODO")} />
        <Column
          status="IN_PROGRESS"
          title="In Progress"
          tasks={handleFilterTasks("IN_PROGRESS")}
        />
        <Column status="DONE" title="Done" tasks={handleFilterTasks("DONE")} />
      </div>

      {/* Add DragOverlay - this floats above everything */}
      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
