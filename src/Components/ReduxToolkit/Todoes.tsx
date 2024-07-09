import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todo/TodoSlice";

interface Todo {
  id: string;
  text: string;
}

const Todoes: React.FC = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
      <div className="text-4xl text-center mb-3">Todos</div>
      <ul className="flex flex-col shadow rounded-lg overflow-hidden mb-4s">
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="mt-4 gap-3 flex justify-between
          items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todoes;
