import { Outlet } from "react-router-dom";
import { Header } from "../Components/Headers/Header";

export const RouterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
