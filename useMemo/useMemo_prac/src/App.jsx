import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive task: " );
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  }

  let double=useMemo(()=>expensiveTask(input),[input]);

  return (
    <>
      <div>
        <button onClick={()=>setCount(count+1)}>Inc</button>
      </div>
      <br /><br />
      <input type="number" placeholder='Enter number' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <br /><br />
      <div>
        Count:{count}
      </div>
      <br /><br />
      <div>
        Double:{double}
      </div>

    </>
  )
}

export default App
