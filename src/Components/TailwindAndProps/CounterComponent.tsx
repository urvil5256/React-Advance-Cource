import { useState } from "react";
import { AddValue } from "../../Hooks/Counter/AddValue";
import { RemoveValue } from "../../Hooks/Counter/RemoveValue";

const CounterComponent = () => {
  const [counter, setCounter] = useState(15);
  return (
    <div className="w-full max-w-lg mx-auto rounded-md border m-3 text-center bg-gray-700 text-white">
      <p className="inline-flex items-center text-lg font-semibold">
        Hooks Example
      </p>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          Counter Example Using Hooks{" "}
        </h1>
        <p className="mt-3 text-sm text-white">
          <h2 className="inline-flex items-center text-lg font-semibold">
            Increase/Decrease Counter {counter}
          </h2>
          <AddValue setCounter={setCounter} isDisabled={counter >= 20} />
          <br />
          <RemoveValue setCounter={setCounter} isDisabled={counter <= 0} />
          <br />
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => setCounter(15)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export { CounterComponent };
