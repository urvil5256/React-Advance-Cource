import { FC, ReactNode, useEffect, useState } from "react";

type DataProviderProps = {
  render: (data: string | null) => ReactNode;
};
export const DataProvider: FC<DataProviderProps> = ({ render }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("Hello from render props!");
    }, 1000);
  }, []);

  return <>{render(data)}</>;
};
