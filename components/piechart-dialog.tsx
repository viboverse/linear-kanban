"use client";

import { ChartPie } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { Task } from "@/generated/prisma/client";

const chartConfig = {
  taskCount: {
    label: "Tasks",
  },
  TODO: {
    label: "To Do",
    color: "#2563eb",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "#f97316",
  },
  DONE: {
    label: "Done",
    color: "#16a34a",
  },
} satisfies ChartConfig;

export default function PieChartDialog({ tasks }: { tasks: Task[] }) {
  const [open, setOpen] = useState(false);

  const totalTasks = tasks.length;

  const todoCount = tasks.filter((task) => task.status === "TODO").length;
  const inProgressCount = tasks.filter(
    (task) => task.status === "IN_PROGRESS",
  ).length;
  const doneCount = tasks.filter((task) => task.status === "DONE").length;

  const chartData = [
    {
      status: "To Do",
      taskCount: todoCount,
      fill: "var(--color-TODO)",
    },
    {
      status: "In Progress",
      taskCount: inProgressCount,
      fill: "var(--color-IN_PROGRESS)",
    },
    {
      status: "Done",
      taskCount: doneCount,
      fill: "var(--color-DONE)",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="gap-2 bg-green-600 hover:bg-green-800"
        >
          <ChartPie size={16} />
          Stats
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-200 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Task Statistics</DialogTitle>
          <DialogDescription>
            Overview of your task distribution and progress
          </DialogDescription>
        </DialogHeader>
        <Card className="flex flex-col">
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="animate-in fade-out zoom-in-95 mx-auto aspect-square max-h-[250px] duration-500"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="taskCount"
                  nameKey="status"
                  innerRadius={60}
                  strokeWidth={5}
                  animationBegin={0}
                  animationDuration={800}
                  animationEasing="ease-out"
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalTasks}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Tasks
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="text-muted-foreground text-center leading-none">
              Keep up the great work!
            </div>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
