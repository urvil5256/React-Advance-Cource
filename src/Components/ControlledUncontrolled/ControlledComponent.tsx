import { ChangeEvent, FormEvent, useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("Form Data :", formData);
  };
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-orange-500 dark:text-white">
          Sign in to our platform
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-orange-500 dark:text-white">
            Name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-orange-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-orange-500 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-orange-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-orange-500 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-orange-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="••••••••"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export { ControlledForm };
