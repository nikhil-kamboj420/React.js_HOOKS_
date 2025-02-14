import { useState } from 'react'

export const UseStateObject = () => {
  const[users, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 }
  ]);
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(true);
  }

  return (
    <div>
      <h1>Users List</h1>
      <button onClick={handleClick}>Show List</button>
      {showList && <ul>
        {users.map((curElem, index) => {
          return <li key={index}>{`Name : ${curElem.name} Age : ${curElem.age}`}</li>
        })}
      </ul>}
    </div>
  )
}