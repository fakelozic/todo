"use server";

import { todos } from "@/drizzle/db/schema";
import { db } from "@/drizzle";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {
  const session = await auth();
  const task = formData.get("task") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;
  const status = formData.get("status") as string;

  if (!session?.user?.id) {
    throw new Error("You must be signed in to create a task.");
  }
  const userId = session.user.id;
  await db.insert(todos).values({
    task,
    description,
    priority: priority as "High" | "Medium" | "Low",
    status: status as "OnPaper" | "InProgress" | "Done",
    userId,
  });
  revalidatePath("/tasks");
  redirect("/tasks");
}
