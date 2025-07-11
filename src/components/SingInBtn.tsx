"use client"
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SignInBtn() {
  const patname = usePathname();
  return (
    <>
      {patname !== "/sign-in" ? (
        <Button variant={"outline"} asChild>
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}
