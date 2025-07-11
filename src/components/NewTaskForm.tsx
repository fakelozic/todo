import { createTask } from "@/src/app/actions/tasksActions";

export default function NewTaskForm() {
  return (
    <form action={createTask} className="mb-8 p-4 border rounded-lg">
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
          defaultValue="Medium"
          className="w-full p-2 border rounded-md bg-white"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>{" "}
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block mb-1 font-medium">
          Status
        </label>
        <select
          name="status"
          id="status"
          // Your schema default is "OnPaper", so your UI default should match.
          defaultValue="OnPaper"
          className="w-full p-2 border rounded-md bg-white"
        >
          <option value="OnPaper">On Paper</option>
          <option value="InProgress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}
