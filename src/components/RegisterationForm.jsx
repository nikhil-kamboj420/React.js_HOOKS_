import { useState } from "react";

export const RegisterationForm = () => {
  const [user, setUser] = useState({});

  //* handle inputValue 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };

  //* handle form submit

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className=" h-[100vh] max-w-[100vw] ">
      <div className="lg:max-w-[30vw] bg-amber-300 min-h-[60vh] max-w-[50vw] m-auto mt-7 p-3">
        <h1 className="text-black text-left text-xl  font-bold">Sign Up</h1>
        <p className="text-black text-left my-1">
          Please fill in this form to create an account
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="flex flex-col gap-1">
            <label className="text-black text-left" htmlFor="firstName">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={user.value}
              onChange={(e) => handleInputChange(e)}
              className="bg-gray-100 p-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black text-left" htmlFor="lastName">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={user.value}
              onChange={(e) => handleInputChange(e)}
              className="bg-gray-100 p-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black text-left" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={user.value}
              onChange={(e) => handleInputChange(e)}
              className="bg-gray-100 p-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black text-left" htmlFor="password">
              Password *
            </label>
            <input
              type="password"
              id="password"
              value={user.value}
              onChange={(e) => handleInputChange(e)}
              className="bg-gray-100 p-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black text-left" htmlFor="phoneNumber">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={user.value}
              onChange={(e) => handleInputChange(e)}
              className="bg-gray-100 p-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>
          <p className="my-5">
          By creating an account you agree to our{" "}
          <span className="text-blue-400">Terms & Policy</span>
        </p>
        <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
