import { signOutAction } from "@/src/app/actions/authActions";
import { Button } from "./ui/button";

export default function SignOut({
  text,
  variant,
}: {
  text: string;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null;
}) {
  return (
    <form action={signOutAction}>
      <Button variant={variant}>{text}</Button>
    </form>
  );
}
