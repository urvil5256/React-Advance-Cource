import { FormEvent, useRef } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`Input value: ${inputRef?.current?.value}`);
  };

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-orange-500 dark:text-white">
          Name
        </label>
        <input
          type="text"
          ref={inputRef}
          className="bg-gray-50 border border-gray-300 text-orange-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Input Name"
        />
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export { UncontrolledForm };
