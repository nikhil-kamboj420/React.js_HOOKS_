import "./App.css";
import { Challenge } from "./components/hooks/Challenge";
import { LiftStateUp } from "./components/hooks/LiftStateUp";
import { ToggleSwich } from "./components/hooks/ToggleSwich";
import { UseState } from "./components/hooks/UseState";
import { UseStateObject } from "./components/hooks/UseStateObject";
import { RegisterationForm } from "./components/RegisterationForm";

function App() {
  return (
    <>
      <RegisterationForm />
      <Challenge />
      <UseState />
      <UseStateObject />
      <LiftStateUp />
      <ToggleSwich />
    </>
  );
}

export default App;
