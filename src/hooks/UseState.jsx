
import "../index.css"
import { useState } from 'react'

export const UseState = () => {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
        <p>
         Click to [See] Increament++
        </p>
        <hr/>
  
    </>
  )
}


