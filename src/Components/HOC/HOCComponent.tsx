import ClickCounter from "./ClickCounter";
import MouseOverCounter from "./MouseOverCounter";
import WithCounter from "./WithCounter";

export interface WithCounterProps {
  name?: string;
  count?: number;
  increment?: () => void;
}

const OnClickCounterComponent = WithCounter(ClickCounter);
const OnMouseOverCounterComponent = WithCounter(MouseOverCounter);

export const HOCComponent = () => {
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
      <h1 className="text-4xl text-center mb-3">HOC Component</h1>
      <OnClickCounterComponent name="Increment On Click" />
      <OnMouseOverCounterComponent name="Increment On Over" />
    </div>
  );
};
