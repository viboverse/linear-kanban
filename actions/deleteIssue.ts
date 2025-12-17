"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function deleteIssue(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("You Must be Logged in in order to remove!"!);
  }

  const issueId = formData.get("issueId") as string;

  // The logic for prevening users to remove others issue
  const issue = await prisma.task.findUnique({
    where: {
      userId: userId,
      id: issueId,
    },
  });

  if (issue?.userId !== userId) {
    throw new Error("Unauthorized");
  }

  await prisma.task.delete({
    where: {
      id: issueId,
    },
  });

  revalidatePath("/");
}
