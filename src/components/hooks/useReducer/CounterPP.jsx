import { useReducer } from "react";

const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      state;
      break;
  }
};

export const CounterPP = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="h-lvh max-w-[100vw] flex flex-col justify-center items-center">
       <h1>useReducer Hook</h1>
      <h1>{state.count}</h1>
      <button className="my-2" onClick={() => dispatch({ type: "Increment" })}>
        Increment
      </button>
      <button className="my-2" onClick={() => dispatch({ type: "Decrement" })}>
        Decrement
      </button>
      <button className="my-2" onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  );
};
