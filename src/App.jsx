import "./App.css";
import { Challenge } from "./components/hooks/Challenge";
import { LiftStateUp } from "./components/hooks/LiftStateUp";
import { ToggleSwich } from "./components/hooks/ToggleSwich";
import { UseState } from "./components/hooks/UseState";
import { UseStateObject } from "./components/hooks/UseStateObject";
import { LoginForm } from "./components/LoginForm";
import { RegisterationForm } from "./components/RegisterationForm";

function App() {
  return (
    <>
      <LoginForm />
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
