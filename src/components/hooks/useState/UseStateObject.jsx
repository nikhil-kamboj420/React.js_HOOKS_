import { useState } from "react";

export const UseStateObject = () => {
  const [users, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(true);
  };

  return (
    <>
      <h1>useState Hook</h1>
      <h1 className="text-6xl relative top-[4rem]">Users List</h1>
      <section className="main-div">
        <button onClick={handleClick}>Show List</button>
        {showList && (
          <ul>
            {users.map((curElem, index) => {
              return (
                <li
                  key={index}
                >{`Name : ${curElem.name} Age : ${curElem.age}`}</li>
              );
            })}
          </ul>
        )}
        <hr />
      </section>
    </>
  );
};
