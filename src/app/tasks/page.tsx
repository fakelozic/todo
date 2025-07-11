import NewTaskForm from "@/src/components/NewTaskForm";
import { eq, desc } from "drizzle-orm";
import { db } from "@/drizzle";
import { todos } from "@/drizzle/db/schema";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Task() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return redirect("/sign-in");
  }

  const tasks = await db
    .select()
    .from(todos)
    .where(eq(todos.userId, userId))
    .orderBy(desc(todos.createdAt));

  return (
    <div className="mt-4 container mx-auto px-2">
      <h1 className="text-2xl mb-5">All Tasks</h1>
      <div className="flex gap-x-4 flex-col md:flex-row">
        <div className="flex-1">
          <NewTaskForm />
        </div>
        <div className="flex-1">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-500 border p-8 rounded-md">
              <p>You have no tasks yet.</p>
              <p>Create one using the form on the left.</p>
            </div>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li key={task.id} className="border mb-3 p-2 rounded-md">
                  <h2 className="text-xl font-medium">
                    <Link href={`/tasks/${task.id}`}>{task.task}</Link>
                  </h2>
                  <span>{task.priority}</span>
                  <br />
                  <span>{task.status}</span>
                  {task.description && <p>{task.description}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
