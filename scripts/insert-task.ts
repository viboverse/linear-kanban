import { prisma } from "@/lib/prisma";
import { MOCK_TASKS } from "../lib/tasks";

const YOUR_USER_ID = "user_36NtgteIR8JaoN7X2leCO6xtIKO";
async function insertTasks() {
  for (const task of MOCK_TASKS) {
    await prisma.task.create({
      data: {
        ...task,
        userId: YOUR_USER_ID,
      },
    });
  }
  console.log("Done!");
  await prisma.$disconnect();
}

insertTasks();
