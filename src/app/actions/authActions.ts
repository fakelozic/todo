"use server";

import { signIn, signOut } from "@/auth";

export const signInActionGithub = async () => {
  await signIn("github", { redirectTo: "/tasks" });
};

export const signInActionGoogle = async () => {
  await signIn("google", { redirectTo: "/tasks" });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/sign-in" });
};
