import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Profile() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/sign-in");
  }

  const { user } = session;
  const formattedDate = new Date(session.expires).toLocaleString();

  return (
    <div className="mt-20 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          User Profile
        </h1>
        <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center">
          {user.image && (
            <img
              src={user.image}
              alt={user.name ?? "User avatar"} // Use nullish coalescing for a fallback alt text
              className="w-18 h-18 rounded-full mx-auto mb-4"
            />
          )}
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{user.email}</p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Session Expires:
            <br />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {formattedDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
