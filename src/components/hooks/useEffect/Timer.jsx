import { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCount((pre)=>pre + 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return <h1>{count}</h1>;
};
