import NewTaskForm from "../components/NewTaskForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    return redirect("/sign-in");
  }
  return (
    <div>
      <NewTaskForm />
    </div>
  );
}
