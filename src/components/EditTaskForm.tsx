import { updateTask } from "@/src/app/actions/tasksActions";
import { Button } from "./ui/button";
import { todos } from "@/drizzle/db/schema";

// 1. Create a reusable type from your Drizzle schema
// This tells TypeScript: "The 'Todo' type is the shape of a row selected from the 'todos' table."
type Todo = typeof todos.$inferSelect;

// 2. Define the props for your component using the new type
// interface EditTaskFormProps {
//   task: Todo;
// }

export default function EditTaskForm({ task }: { task: Todo }) {
  const updateTaskWithId = updateTask.bind(null, task.id);
  return (
    <form action={updateTaskWithId} className="mb-8 p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add a New Task</h2>
      <div className="mb-4">
        <label htmlFor="task" className="block mb-1 font-medium">
          Task
        </label>
        <input
          type="text"
          id="task"
          name="task"
          required
          className="w-full p-2 border rounded-md"
          defaultValue={task.task}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1 font-medium">
          Description (Optional)
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full p-2 border rounded-md"
          defaultValue={task.description ? task.description : ""}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block mb-1 font-medium">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          required
          defaultValue={task.priority}
          className="w-full p-2 border rounded-md bg-white"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block mb-1 font-medium">
          Status
        </label>
        <select
          name="status"
          id="status"
          defaultValue={task.status}
          className="w-full p-2 border rounded-md bg-white"
        >
          <option value="OnPaper">On Paper</option>
          <option value="InProgress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <Button type="submit">Edit Task</Button>
    </form>
  );
}
