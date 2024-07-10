import { useState } from "react";
import { UserComponent } from "./UserComponent";
import ErrorBoundryFallbackComponent from "./ErrorBoundryFallbackComponent";
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundryHandler = () => {
  const [isUserComponent, setUserComponent] = useState(false);
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundryFallbackComponent}
      onReset={() => setUserComponent(false)}
    >
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
        <h5 className="text-xl font-medium text-orange-500 dark:text-white mb-3">
          Error Boundry Concept
        </h5>
        {isUserComponent ? <UserComponent /> : null}
        <button
          onClick={() => {
            setUserComponent(true);
          }}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          User Component
        </button>
      </div>
    </ErrorBoundary>
  );
};
export { ErrorBoundryHandler };
