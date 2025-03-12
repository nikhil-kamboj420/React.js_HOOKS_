import { useState } from "react";

export const LoginForm = () => {
  const [user, setUser] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));
  };
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className=" h-[100vh] max-w-[100vw] ">
      <div className="lg:max-w-[30vw] bg-amber-300 min-h-[50vh] max-w-[80vw] m-auto mt-[4rem] p-3">
        <h1>useState Hook</h1>
        <h1 className=" text-black font-bold text-2xl my-4">Login Form</h1>
        <form
          className="flex flex-col gap-4 p-4"
          onSubmit={(e) => handleLoginFormSubmit(e)}
        >
          <div className="flex gap-2">
            <label className="text-lg text-black font-medium">Username:</label>
            <input
              type="text"
              className="w-full p-2  bg-black text-white border border-gray-300 rounded-lg"
              name="username"
              value={user.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-2">
            <label className="text-lg text-black font-medium">Password:</label>
            <input
              type="password"
              className="w-full p-2  bg-black text-white border border-gray-300 rounded-lg"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold max-w-2xs self-center my-6 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
