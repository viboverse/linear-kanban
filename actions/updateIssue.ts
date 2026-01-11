"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Priority } from "@/generated/prisma/client";
import { revalidatePath } from "next/cache";

export async function updateIssue(
  prevState: { success: boolean; message: string } | null,
  formData: FormData,
): Promise<{
  success: boolean;
  message: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { success: false, message: "You Must Be Logged In!" };
  }

  const issueId = formData.get("issueId") as string;

  const selectedIssue = await prisma.task.findUnique({
    where: {
      id: issueId,
    },
  });

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const priorityValue = formData.get("priority") as string;
  const dueDateValue = formData.get("dueDate") as string;

  if (!title || !title.trim()) {
    return { success: false, message: "Title is required" };
  }

  if (!description) {
    return { success: false, message: "description is required" };
  }

  const priority = priorityValue.toUpperCase() as Priority;

  const dueDate = new Date(dueDateValue);

  try {
    await prisma.task.update({
      where: {
        id: selectedIssue?.id,
      },
      data: {
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate,
      },
    });

    revalidatePath("/");
    return { success: true, message: "Issue updated succesfuly!" };
  } catch (error) {
    console.log("Database Error: ", error);
    return { success: false, message: "Update Failed!" };
  }
}
