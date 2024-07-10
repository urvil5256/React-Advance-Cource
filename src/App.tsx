import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import {
  AddTodo,
  BGChanger,
  CompoundComponent,
  ControlledForm,
  CounterComponent,
  CurrencyConverter,
  ErrorBoundryHandler,
  HOCComponent,
  Home,
  PasswordGenerator,
  Popup,
  RenderPropsComponent,
  TailwinExample,
  ToggelButton,
  UncontrolledForm,
  User
} from "./Components";
import Login from "./Components/Login/Login";
import { ThemeProvider } from "./Context/Theme";
import { UserContextProvider } from "./Context/UserContextProvider";
import { RouterLayout } from "./RouterLayout/RouterLayout";

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
        path: "advancedReactPatterns",
        children: [
          {
            path: "hoc",
            element: <HOCComponent />,
          },
          {
            path: "renderProps",
            element: <RenderPropsComponent />,
          },
          {
            path: "compoundComponent",
            element: <CompoundComponent />,
          },
          {
            path: "controlled",
            element: <ControlledForm />,
          },
          {
            path: "uncontrolled",
            element: <UncontrolledForm />,
          },
          {
            path: "errorBondry",
            element: <ErrorBoundryHandler />,
          },
          {
            path: "portals",
            element: <Popup />,
          },
        ],
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
