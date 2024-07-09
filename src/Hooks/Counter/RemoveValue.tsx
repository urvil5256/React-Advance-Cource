import { IApp } from "../../App";

export function RemoveValue({ setCounter, isDisabled }: IApp) {
  return (
    <div>
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        disabled={isDisabled}
        className="rounded-md ${} bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Remove Value
      </button>
    </div>
  );
}
