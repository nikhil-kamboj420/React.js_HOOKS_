import { useId } from "react";

export const UseId = () => {
    let id = useId();
    return(
        <form className="flex flex-col items-center h-[100vh] max-w-[100vw]">
            <h1>useId Hook</h1>
            <label htmlFor={id + "username"}>username</label>
            <input className="border-2 border-white border-solid py-2.5" type="text" id={id + "username"} name="username"/>
            <label htmlFor={id + "email"}>email</label>
            <input className="border-2 border-white border-solid py-2.5" type="email" id={id + "email"} name="email"/>
            <label htmlFor={id + "password"}>password</label>
            <input className="border-2 border-white border-solid py-2.5 mb-3.5" type="password" id={id + "password"} name="password"/>
            <button type="submit">Submit</button>
        </form>
    )
}