import "./App.css";
import { Challenge } from "./components/hooks/useState/Challenge";
import { Counter } from "./components/hooks/useState/Counter";
import { LiftStateUp } from "./components/hooks/useState/LiftStateUp";
import { LoginForm } from "./components/hooks/useState/LoginForm";
import { RegistrationForm } from "./components/hooks/useState/RegistrationForm";
import { ToggleSwich } from "./components/hooks/useState/ToggleSwich";
import { UseStateObject } from "./components/hooks/useState/UseStateObject";



function App() {
  return (
    <>
      <LoginForm/>
      <RegistrationForm/>
      <Challenge/>
      <Counter/>
      <UseStateObject/>
      <LiftStateUp/>
      <ToggleSwich/>
    </>
  );
}

export default App;
