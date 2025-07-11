import DeleteTaskForm from "@/src/components/DeleteTaskForm";
import { Button } from "@/src/components/ui/button";
import { db } from "@/drizzle";
import { eq, and } from "drizzle-orm";
import Link from "next/link";
import { todos } from "@/drizzle/db/schema";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskID: string }>;
}) {
  const session = await auth();
  if (!session?.user) {
    return redirect("/sign-in");
  }
  const userId = session.user.id;

  if (!userId) {
    // Or handle the error in a way that makes sense for your application
    throw new Error("User ID is required to fetch a todo.");
  }

  const { taskID } = await params;
  const taskID_num = parseInt(taskID, 10);

  const result = await db
    .select()
    .from(todos)
    .where(and(eq(todos.id, taskID_num), eq(todos.userId, userId)))
    .limit(1);
  const task = result[0];
  return (
    <div className="mt-4 container mx-auto px-2">
      <div className="flex justify-between">
        <h1 className="text-2xl mb-5">All Tasks</h1>
      </div>
      {task ? (
        <div>
          <h3>{task?.task}</h3>
          <h4>{task?.priority}</h4>
          <p>{task?.description}</p>
          <p>{task?.status}</p>
          <div className="flex gap-x-5 mt-5">
            <Button asChild>
              <Link href={`/tasks/${taskID}/edit`}>Edit</Link>
            </Button>
            <DeleteTaskForm taskID={taskID_num} />
          </div>
        </div>
      ) : (
        <h1 className="text-red-500">Task don&apos;t exist</h1>
      )}
    </div>
  );
}
