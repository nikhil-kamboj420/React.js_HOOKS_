import { useState, useCallback } from "react";

const users = [
  { name: "John Doe" },
  { name: "Jane Doe" },
  { name: "Richard Roe" },
  { name: "Emily Chen" },
  { name: "Michael Brown" },
  { name: "Sophia Lee" },
  { name: "William White" },
  { name: "Olivia Martin" },
  { name: "James Davis" },
  { name: "Isabella Garcia" },
];

export const UseCallBack = () => {
  const [show, setShow] = useState(false);
  const showUser = useCallback(() => {
    setShow((pre) => (pre === false ? true : false));
  }, []);

  return (
    <>
      <div className="h-lvh grid place-content-center gap-[3rem]">
        <h1>useCallBack Hook</h1>
        <button onClick={showUser}>see user</button>
        {show && <User users={users} />}
      </div>
    </>
  );
};

const User = ({ users }) => {
  return (
    <ul>
      {users.map((curElem, indx) => {
        return <li key={indx}>{curElem.name}</li>;
      })}
    </ul>
  );
};
