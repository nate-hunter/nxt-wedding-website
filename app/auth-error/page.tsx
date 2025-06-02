export default function AuthErrorPage() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Authentication Error</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          There was a problem with the authentication process. Please try signing in again.
        </p>
      </div>
    </div>
  );
}
