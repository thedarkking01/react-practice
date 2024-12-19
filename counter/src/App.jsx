import './App.css'
import { useState } from 'react'
function App() {

  const [counter, setCounter]  = useState(1)
  const Addvalue=()=>{
    setCounter(counter+1)
  }
  const removevalue=()=>{
    setCounter(counter !== 0? counter-1: counter)
  }

  return (
    <>
    <h1>hiii sourabh</h1>   
    <h2>counter value:{counter}</h2>
    <button onClick={Addvalue}>Add value:{counter}</button>
    <br/>
    <button onClick={removevalue}>Remove value:{counter}</button>

    </>
  )
}

export default App