interface IProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export default function ErrorBoundryFallbackComponent({
  error,
  resetErrorBoundary,
}: IProps) {
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
      <p className="text-4xl text-center mb-3">Something went wrong:</p>
      <span>{error?.message}</span>
      <button
        onClick={resetErrorBoundary}
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Try Again
      </button>
    </div>
  );
}
