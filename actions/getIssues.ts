"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export default async function getIssues() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("You must login!");
  }

  const userIssues = await prisma.task.findMany({
    where: { userId },
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });

  if (!userIssues) {
    console.log("NO ISSUE FOR THE USER YET");
  }

  return userIssues;
}
