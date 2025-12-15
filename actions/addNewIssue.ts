"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Priority } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addNewIssue(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("You must login!");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const priorityValue = formData.get("priority") as string;
  const dueDateValue = formData.get("dueDate") as string;

  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  const priority = priorityValue.toUpperCase() as Priority;

  const dueDate = dueDateValue ? new Date(dueDateValue) : null;

  await prisma.task.create({
    data: {
      userId: userId,
      title: title.trim(),
      description: description,
      priority: priority,
      dueDate: dueDate,
      status: "TODO",
      order: 0,
    },
  });

  revalidatePath("/");
}
