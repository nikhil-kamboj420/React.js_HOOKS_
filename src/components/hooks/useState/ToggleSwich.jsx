import { useState } from "react";
import "../hook-css/toggle-swich.css";

export const ToggleSwich = () => {
  const [isOn, setIsOn] = useState(false);

  const handleSwich = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <h1>useState Hook</h1>
      <h1 className="text-6xl relative top-[4rem]">Toggle Button</h1>
      <section className="main-div">
        <div
          className="bg-gray-300 w-[20rem] h-[8rem] flex  items-center rounded-[5rem]"
          style={{ backgroundColor: `${isOn ? "#4feb12" : "#7b7878"}` }}
          onClick={handleSwich}
        >
          <div
            className={`w-[6rem] h-[6rem] ml-2 mr-2 rounded-full bg-red-500 flex justify-center items-center ${
              isOn ? "isOn" : "isOff"
            }`}
          >
            <span className="text-5xl">{isOn ? "On" : "Off"}</span>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};
