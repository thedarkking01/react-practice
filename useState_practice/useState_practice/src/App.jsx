import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(20)

  // function update(){
  //   setCount(count + 1)
  // }
  const update = () => {
    setCount(count + 1);
  }
  
  const dec =()=>{
    if(count > 0)
    setCount(count - 1);
  }

  return (
    <>
      <h1>Hiii Freinds 👽👽👽👽👽</h1>
      <div className="card">
        <button onClick={update}>
          count is {count}
        </button>
        <button onClick={dec}>down count{count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
