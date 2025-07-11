import Link from "next/link";
import SignOut from "./SignOut";
import { auth } from "@/auth";
import SignInBtn from "./SingInBtn";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="container mx-auto flex justify-between items-center sticky top-0 py-3 border-b bg-white px-2">
      <div>
        <Link className="text-2xl font-bold" href={"/"}>
          ToDo
        </Link>
      </div>
      <div className="flex gap-x-3 md:gap-x-10 items-center">
        {session?.user ? (
          <>
            <Link href={"/tasks"}>Tasks</Link>
            <Link href={"/profile"}>Profile</Link>
            <SignOut text="Sign Out" variant={"outline"} />
          </>
        ) : (
          <SignInBtn />
        )}
      </div>
    </nav>
  );
}
