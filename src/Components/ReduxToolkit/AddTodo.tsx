import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/TodoSlice";
import Todoes from "./Todoes";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg pl-4 py-3 m-4 bg-gray-800 text-orange-500">
      <div className="pl-16 ml-11">
        <form onSubmit={onFormSubmit} className="space-x-3 mt-12">
          <input
            type="text"
            placeholder="Enter a Todo..."
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
          >
            Add
          </button>
        </form>
      </div>
      <div>
        <Todoes />
      </div>
    </div>
  );
};

export { AddTodo };
