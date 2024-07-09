import { FormEvent, useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import Profile from "./Profile";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <form>
      <div className="space-y-12 w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800">
        <div className="border-b border-gray-900/10">
          <h2 className="text-base font-semibold leading-7  text-orange-500">
            Login Information
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="user-name"
                className="block text-sm font-medium leading-6  text-orange-500"
              >
                User name
              </label>
              <div className="mt-2">
                <input
                  id="user-name"
                  name="user-name"
                  type="text"
                  className="block w-full rounded-md border-0 p-2 text-orange-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6  text-orange-500"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 p-2  text-orange-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-4">
          <h2 className="text-base font-semibold leading-7  text-orange-500">
            <Profile />
          </h2>
          <div className="text-wrap text-right py-2 m-3">
            <button
              type="button"
              className="rounded-md bg-blue-700 px-3 py-2 mr-2 text-sm font-semibold text-white shadow-sm hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                setUser({ userName: "", password: "" });
                setUserName("");
                setPassword("");
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className=""></div>
    </form>
  );
};
export default Login;
