"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { useState, useTransition } from "react";
import Column from "./column";
import { Status, Task } from "@/generated/prisma/client";
import updateTaskStatus from "@/actions/updateTaskStatus";
import { TaskCard } from "./task-card";
import { toast } from "sonner";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { toLittleCase } from "@/utils/toLowerCase";

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
    const task = tasks.find((task) => task.id === taskId);
    setActiveTask(task || null);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Status;

    // Find the task being dragged
    const currTask = tasks.find((t) => t.id === taskId);

    // If task already has this status, do nothing
    if (!currTask || currTask.status === newStatus) return;

    // Optimistic update
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus, updatedAt: new Date() }
          : task,
      ),
    );

    // Update database
    startTransition(async () => {
      try {
        await updateTaskStatus(taskId, newStatus);
        toast.success(`The Task moved to ${toLittleCase(newStatus)} Status.`);
      } catch (error) {
        // Revert on error
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, status: currTask.status } : task,
          ),
        );
        toast.error("Failed To Update Task Status!");
        console.error(error);
      }
    });
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="grid min-h-screen w-full grid-cols-3 gap-2 px-2 py-4">
        <Column
          status="TODO"
          title="Todo"
          tasks={handleFilterTasks("TODO")}
          icon={
            <Circle className="h-4 w-4 text-blue-400 hover:animate-pulse" />
          }
        />
        <Column
          status="IN_PROGRESS"
          title="In Progress"
          tasks={handleFilterTasks("IN_PROGRESS")}
          icon={
            <Clock className="h-4 w-4 text-orange-400 hover:animate-pulse" />
          }
        />
        <Column
          status="DONE"
          title="Done"
          tasks={handleFilterTasks("DONE")}
          icon={
            <CheckCircle2 className="h-4 w-4 text-green-400 hover:animate-pulse" />
          }
        />
      </div>

      {/* Add DragOverlay - this floats above everything */}
      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
