import { notFound } from "next/navigation";
import EditTaskForm from "@/src/components/EditTaskForm";
import { db } from "@/drizzle";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { todos } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ taskID: string }>;
}) {
  const { taskID } = await params;
  const taskID_num = parseInt(taskID, 10);
  const result = await db
    .select()
    .from(todos)
    .where(eq(todos.id, taskID_num))
    .limit(1);
  const task = result[0];
  if (!task) {
    notFound();
  }

  return (
    <div className="mt-4 container mx-auto px-2">
      <Button className="text-xl mb-4" asChild>
        <Link href={"/tasks"}>All Tasks</Link>
      </Button>
      <EditTaskForm task={task} />
    </div>
  );
}
