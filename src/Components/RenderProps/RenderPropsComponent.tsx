import { DataProvider } from "./Render";

export const RenderPropsComponent = () => {
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
      <h1 className="text-4xl text-center mb-3">Render Props Example</h1>
      <DataProvider
        render={(data) => <div>{data ? data : "Loading..."}</div>}
      />
    </div>
  );
};
