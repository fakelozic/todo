import { Button } from "./ui/button";
import { deleteTask } from "@/src/app/actions/tasksActions";

export default function DeleteTaskForm({ taskID }: { taskID: number }) {
  const deleteTaskWithId = deleteTask.bind(null, taskID);
  return (
    <form action={deleteTaskWithId}>
      <Button variant={"destructive"} type="submit">
        Delete
      </Button>
    </form>
  );
}
