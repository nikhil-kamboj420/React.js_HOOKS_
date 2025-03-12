import React, { useState, useMemo } from 'react';

// A simple component that demonstrates the use of React.memo and useMemo
const MemoComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // useMemo to memoize the expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2; // Example of an expensive calculation
  }, [count]);

  return (
    <div className='h-lvh max-w-[100vw]'>
      <h1>React.memo and useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
      className='py-4 px-[10rem] border-2 border-white'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

// Memoizing the component to prevent unnecessary re-renders
export default React.memo(MemoComponent);
