import {
  signInActionGithub,
  signInActionGoogle,
} from "@/src/app/actions/authActions";

export default function SignIn() {
  return (
    <div className="h-96 flex items-center justify-center px-4">
      <div className="w-full max-w-sm shadow-xl rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">
          Welcome to JOBS
        </h1>
        <p className="text-gray-600">
          Sign in to post or apply jobs for opportunities
        </p>
        <div className="mt-6">
          <form action={signInActionGithub}>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-white py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition cursor-pointer"
            >
              Sign in with Github
            </button>
          </form>
        </div>
        <div className="mt-6">
          <form action={signInActionGoogle}>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-white py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition cursor-pointer"
            >
              Sign in with Google
            </button>
          </form>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          By signing in, you agree to our
          <div className="mt-1">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Terms of Service{" "}
            </a>
            and
            <a href="#" className="text-blue-500 hover:text-blue-600">
              {" "}
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
