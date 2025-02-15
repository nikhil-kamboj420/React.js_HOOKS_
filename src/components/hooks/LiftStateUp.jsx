import { useState } from "react"

export const LiftStateUp = ()=>{
    const [inputValue,setInputValue]  = useState("");
    return <>
    <h1 className='text-6xl relative top-[4rem]'>LiftStateUp Input</h1>
    <section  className="main-div">
    <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
    <DisplayComponent inputValue={inputValue}/>
    </section>
    <hr />
    </>
}

const InputComponent  = ({inputValue,setInputValue})=>{
   const handleChange =(e)=>{
    return setInputValue(e.target.value);
   }
    return <>
    <div>
        <input className="liftUpInput" type="text" placeholder="type here and see bellow" onChange={(e)=> handleChange(e) } value={inputValue}/>
    </div>
    </>
}

const DisplayComponent = ({inputValue})=>{
    return <>
    <div className="main-div">
        <div className="wrap">
        <h1>{inputValue}</h1>
        </div>
    </div>
    </>
}