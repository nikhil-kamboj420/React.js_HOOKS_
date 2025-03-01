
import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-6xl relative'>Counter</h1>
    <section className={"main-div"}>
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
        <p>
         Click to [See] Increament++
        </p>
        <hr/>
    </section>
    </>
  )
}


