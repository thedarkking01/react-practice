import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let val=useRef(0);
  let btnref=useRef();

  function handleinc(){
    val.current = val.current + 1;
    console.log("vlaue of value: " + val.current);
    
    setCount(count + 1);
  }
  function changecolor(){
    btnref.current.style.backgroundColor = 'red';
    setTimeout(()=>{btnref.current.style.backgroundColor = 'blue'}, 2000);
  }

  //variation -1 => haar baar render hona
  useEffect(() =>console.log('mei hrr baar render ho rha hu'));

  return (
    <>
      <div>
        <button ref={btnref} onClick={handleinc}>Increment {count}</button>
      </div>
      <br />
      <div><button onClick={changecolor}>change color of 1 btn</button></div>
    </>
  )
}

export default App
