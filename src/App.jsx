import "./App.css";
    {/* useState components */}
import { Challenge } from "./components/hooks/useState/Challenge";
import { Counter } from "./components/hooks/useState/Counter";
import { LiftStateUp } from "./components/hooks/useState/LiftStateUp";
import { LoginForm } from "./components/hooks/useState/LoginForm";
import { RegistrationForm } from "./components/hooks/useState/RegistrationForm";
import { ToggleSwich } from "./components/hooks/useState/ToggleSwich";
import { UseStateObject } from "./components/hooks/useState/UseStateObject";

    {/* useState components */}
import { Timer } from "./components/hooks/useEffect/Timer";



function App() {
  return (
    <>
    {/* useState components */}
      <LoginForm/>
      <RegistrationForm/>
      <Challenge/>
      <Counter/>
      <UseStateObject/>
      <LiftStateUp/>
      <ToggleSwich/>
      {/* useEffect components */}
      <Timer/>
    </>
  );
}

export default App;
