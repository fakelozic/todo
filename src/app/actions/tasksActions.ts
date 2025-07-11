"use server";

import { todos } from "@/drizzle/db/schema";
import { db } from "@/drizzle";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq, and } from "drizzle-orm";

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

export async function updateTask(id: number, formData: FormData) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    // This could also be a `redirect` or a more specific error
    throw new Error("You must be signed in to perform this action.");
  }
  const task = formData.get("task") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;
  const status = formData.get("status") as string;

  if (!task || !priority) {
    throw new Error("Task and priority are required.");
  }
  const [updatedTodo] = await db
    .update(todos)
    .set({
      task,
      description,
      priority: priority as "High" | "Medium" | "Low",
      status: status as "OnPaper" | "InProgress" | "Done",
    })
    .where(and(eq(todos.id, id), eq(todos.userId, userId)))
    .returning();

  if (!updatedTodo) {
    // If nothing was returned, it means the WHERE clause failed.
    // This happens if the task doesn't exist OR the user doesn't own it.
    // In either case, the user is not authorized.
    throw new Error(
      "Unauthorized: You do not have permission to edit this task."
    );
  }

  revalidatePath(`/tasks/${id}`);
  redirect(`/tasks/${id}`);
}

export async function deleteTask(id: number) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("You must be signed in to perform this action.");
  }

  // Use .returning() to get feedback from the database.
  // This will return the deleted row if the operation was successful.
  const [deletedTodo] = await db
    .delete(todos)
    .where(and(eq(todos.id, id), eq(todos.userId, userId))) // Check both id AND ownership
    .returning(); // Ask for the deleted row's data back

  // If `deletedTodo` is undefined, it means the WHERE clause found no match.
  // This happens if the task doesn't exist OR the user doesn't own it.
  if (!deletedTodo) {
    throw new Error(
      "Unauthorized: You do not have permission to delete this task."
    );
  }

  revalidatePath("/tasks");
  redirect("/tasks");
}
