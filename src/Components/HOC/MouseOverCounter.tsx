import { WithCounterProps } from "./HOCComponent";

const MouseOverCounter = ({ count, increment, name }: WithCounterProps) => {
  return (
    <div className="flex flex-wrap justify-center py-3">
      <label>Count: {count}</label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded"
        onMouseOver={increment}
      >
        {name}
      </button>
    </div>
  );
};

export default MouseOverCounter;
