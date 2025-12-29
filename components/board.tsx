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

  const todoTasks = tasks.filter((task) => task.status === "TODO");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const doneTasks = tasks.filter((task) => task.status === "DONE");

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
        task.id === taskId ? { ...task, status: newStatus } : task,
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
        <Column title="Todo" status="TODO" tasks={todoTasks} />
        <Column
          title="In Progress"
          status="IN_PROGRESS"
          tasks={inProgressTasks}
        />
        <Column title="Done" status="DONE" tasks={doneTasks} />
      </div>

      {/* Add DragOverlay - this floats above everything */}
      <DragOverlay>
        {activeTask ? (
          // <div className="rotate-1">
          <TaskCard task={activeTask} />
        ) : // </div>
        null}
      </DragOverlay>
    </DndContext>
  );
}
