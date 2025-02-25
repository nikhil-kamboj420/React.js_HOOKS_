//* useState challenge Description:

//? Create a simple React component that allows user to increment and decrement a counter using two buttons.

//? Reset Button : Add a button to reset the count to Zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the button when those limits are reached.

//? Step Increacment or Decrement: Add an input field to allow users to set the step value by which the counter should increment or decrement.

import { useState } from "react";

export const Challenge = () => {
  //* defining states
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  //* defining functions
  const handleIncrement = () => {
    if (count < 100) {
      setCount(() => count + step);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(() => count - step);
    }
  };

  const handleStep = (stepValue) => {
    if (count < 100) {
      setStep(stepValue);
    }
  };

  return (
    <div className="flex flex-col gap-7 h-[100vh] font-bold justify-center items-center">
      <h1>useState Challenge</h1>
      <p className="text-4xl">Count : {count}</p>
      <label htmlFor="step" className="text-3xl">
        Step:
      </label>
      <input
        className=" text-center text-3xl border-2 border-gray-500 relative top-[-4rem] left-[10rem] max-w-[10rem]"
        type="number"
        id="step"
        name="step"
        value={step}
        onChange={(e) => handleStep(Number(e.target.value))}
      />
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
