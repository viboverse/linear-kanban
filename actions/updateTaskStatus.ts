"use server";

import { Status } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function updateTaskStatus(
  taskId: string,
  updatedStatus: Status,
) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("You must login!");
  }

  await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      status: updatedStatus,
    },
  });

  revalidatePath("/");
}
