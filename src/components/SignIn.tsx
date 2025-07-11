import {
  signInActionGithub,
  signInActionGoogle,
} from "@/src/app/actions/authActions";

export default function SignIn() {
  return (
    <div className="h-96 flex items-center justify-center px-4">
      <div className="w-full max-w-sm shadow-xl rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">
          Welcome to ToDo
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
            <button className="gsi-material-button w-[500px]">
              <div className="gsi-material-button-state"></div>
              <div className="gsi-material-button-content-wrapper">
                <div className="gsi-material-button-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="block"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span className="gsi-material-button-contents">
                  Sign in with Google
                </span>
                <span className="hidden">Sign in with Google</span>
              </div>
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
