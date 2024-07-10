import { FC, useState } from "react";
import { WithCounterProps } from "./HOCComponent";

const WithCounter = (ChildComponent: FC<WithCounterProps>) => {
  const WrapperComponent = (props: WithCounterProps) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return <ChildComponent {...props} count={count} increment={increment} />;
  };
  return WrapperComponent;
};

export default WithCounter;
