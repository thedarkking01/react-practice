import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  // const [count, setCount] = useState(0)
  // let val=useRef(0);
  // let btnref=useRef();

  // function handleinc(){
  //   val.current = val.current + 1;
  //   console.log("vlaue of value: " + val.current);
    
  //   setCount(count + 1);
  // }
  // function changecolor(){
  //   btnref.current.style.backgroundColor = 'red';
  //   setTimeout(()=>{btnref.current.style.backgroundColor = 'blue'}, 2000);
  // }

  // //variation -1 => haar baar render hona
  // useEffect(() =>console.log('mei hrr baar render ho rha hu'));

  // stop watch project
  const [time,settime]=useState(0);
  let timeref=useRef(null);

  function start() {
    timeref.current=setInterval(()=>{
      settime(time=>time+1)
    },1000);
  }
  function stop() {
    clearInterval(timeref.current);
    timeref.current=null;
  }
  function reset() {
    stop();
    settime(0);
  }

  return (
    <>
    <div>
      <h1>Stopwatch : {time} seconds</h1>
      <br /><br />
      <button onClick={start}>Start</button>
      <br /><br />
      <button onClick={stop}>Stop</button>
      <br /><br />
      <button onClick={reset}>Reset</button>
    </div>




      {/* <div>
        <button ref={btnref} onClick={handleinc}>Increment {count}</button>
      </div>
      <br />
      <div><button onClick={changecolor}>change color of 1 btn</button></div> */}
    </>
  )
}

export default App
