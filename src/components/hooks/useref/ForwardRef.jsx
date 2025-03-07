import { useRef } from "react";

export const ForwardRef = () => {
    const username = useRef(null);
    const password = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputChild label="username" ref={username} />
            <InputChild label="password" ref={password} type="password" />
            <button>submit</button>
        </form>
    )
}

const InputChild = ({ label, ref, type = "text" }) => {
    return (
        <div>
            <label className="text-white">{label}</label>
            <input className="text-2xl text-black w-3xs px-1.5 py-4 mb-4 bg-amber-300" type={type} ref={ref} />
        </div>
    )
}