
import './App.css'
import { LiftStateUp } from './components/hooks/LiftStateUp'
import { ToggleSwich } from './components/hooks/ToggleSwich'
import { UseState } from './components/hooks/UseState'
import { UseStateObject } from './components/hooks/UseStateObject'

function App() {
  return (
    <>
      <UseState/>
      <UseStateObject/>
       <LiftStateUp/>
       <ToggleSwich/>
       </>
  )
}

export default App
