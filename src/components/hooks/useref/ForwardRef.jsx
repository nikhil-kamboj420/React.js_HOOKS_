import { useRef } from "react";

export const ForwardRef = ()=>{
    const username = useRef(null);
    const password = useRef(null);
    const  handleSubmit= (e)=>{
        e.preventDefault();
        console.log(username.current.value,password.current.value);
    }
    return (
        <form className="h-[100vh] max-w-[100vw]" onSubmit={handleSubmit}>
            <InputChild lable= {"username"} ref={username} type={"text"}/>
            <InputChild lable= {"password"} ref={password} type={"password"}/>
            <button>submit</button>
        </form>
    )
}

const InputChild = ({ lable, ref, type }) => {
    return (
        <div>
            <label className="text-white px-2.5">{lable}</label>
            <input className="text-2xl text-black w-3xs px-1.5 py-4 mb-4 bg-amber-300" type={type} ref={ref} />
        </div>
    )
}