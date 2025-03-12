import { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <>
    <div className="flex flex-col justify-center items-center h-lvh gap-6">
    <h1>useEffect Hook</h1>
    <h1>Timer</h1>
    <h1>{count}</h1>
    </div>

    </>
  );
};
