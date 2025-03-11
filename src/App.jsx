import "./App.css";
{
  /* useState components */
}
import { Challenge } from "./components/hooks/useState/Challenge";
import { Counter } from "./components/hooks/useState/Counter";
import { LiftStateUp } from "./components/hooks/useState/LiftStateUp";
import { LoginForm } from "./components/hooks/useState/LoginForm";
import { RegistrationForm } from "./components/hooks/useState/RegistrationForm";
import { ToggleSwich } from "./components/hooks/useState/ToggleSwich";
import { UseStateObject } from "./components/hooks/useState/UseStateObject";

{
  /* useState components */
}
import { Timer } from "./components/hooks/useEffect/Timer";
{
  /*useRef Component */
}
import { Example } from "./components/hooks/useref/example";
import { ForwardRef } from "./components/hooks/useref/ForwardRef";
{
  /* useId component */
}
import { UseId } from "./components/hooks/useId/UseId";
{
  /* context  API, useContext, context provider */
}
import { ThemeProvider } from "./components/hooks/contextApi/ContextApi";
import { Navbar } from "./components/hooks/contextApi/Navbar";
import { Content } from "./components/hooks/contextApi/Content";
{
  /* usereducer component */
}
import { CounterPP } from "./components/hooks/useReducer/CounterPP";

function App() {
  return (
    <>
      {/* useState components */}
      <LoginForm />
      <RegistrationForm />
      <Challenge />
      <Counter />
      <UseStateObject />
      <LiftStateUp />
      <ToggleSwich />
      {/* useEffect components */}
      <Timer />
      {/* useRef components */}
      <Example />
      <ForwardRef />
      {/* useId component */}
      <UseId />
      {/* context  API, useContext, context provider */}
      <ThemeProvider>
        <Navbar />
        <Content />
      </ThemeProvider>
      {/* usereducer component */}
      <CounterPP />
    </>
  );
}

export default App;
