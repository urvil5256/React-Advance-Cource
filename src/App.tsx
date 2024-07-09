import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BGChanger,
  CounterComponent,
  CurrencyConverter,
  Home,
  PasswordGenerator,
  TailwinExample,
  ToggelButton,
  User,
  AddTodo,
} from "./Components";
import Login from "./Components/Login/Login";
import { ThemeProvider } from "./Context/Theme";
import { UserContextProvider } from "./Context/UserContextProvider";
import { RouterLayout } from "./RouterLayout/RouterLayout";
import { Provider } from "react-redux";
import { store } from "./app/store";

export interface IApp {
  setCounter: Dispatch<SetStateAction<number>>;
  isDisabled: boolean;
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "bgChanger",
        element: <BGChanger />,
      },
      {
        path: "passwordGenerator",
        element: <PasswordGenerator />,
      },
      {
        path: "tailwindAndPropsExample",
        children: [
          {
            path: "counter",
            element: <CounterComponent />,
          },
          {
            path: "tailwindExample",
            element: <TailwinExample />,
          },
        ],
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "currencyConverter",
        element: <CurrencyConverter />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "toggel",
        element: <ToggelButton />,
      },
      {
        path: "addTodo",
        element: <AddTodo />,
      },
    ],
  },
]);

//Second way to define a routes
// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RouterLayout />}>
//       <Route path="" element={<Home />} />
//       <Route path="bgChanger" element={<BGChanger />} />
//       <Route path="passwordGenerator" element={<PasswordGenerator />} />
//       <Route path="tailwindAndPropsExample">
//         <Route path="counter" element={<CounterComponent />} />
//         <Route path="tailwindExample" element={<TailwinExample />} />
//       </Route>
//     </Route>
//   )
// );
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <UserContextProvider>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Provider store={store}>
          <RouterProvider router={routes}></RouterProvider>
        </Provider>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
