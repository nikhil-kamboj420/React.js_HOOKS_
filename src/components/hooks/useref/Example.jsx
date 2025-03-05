import { useRef } from "react";

export const Example = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e)=>{
    e.preventDefault();  
    console.log(username.current.value,password.current.value);
  }
  return (
    <section className="h-[100vh] max-w-[100vw] flex justify-center items-center">
      <form className="grid grid-cols-1" onSubmit={handleFormSubmit}>
        <input className="text-2xl text-black w-3xs px-1.5 py-4 mb-4 bg-amber-300" type="text" ref={username} />
        <input className="text-2xl text-black w-3xs px-1.5 py-4 mb-4 bg-amber-300" type="password" ref={password} />
        <button className="w-3xs py-4" type="submit">submit</button>
      </form>
    </section>
  );
};
