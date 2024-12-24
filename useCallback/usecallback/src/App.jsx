import { useCallback, useState } from 'react'
import './App.css'
import Child from './component/child';

function App() {
  const [count, setCount] = useState(0)
  // function handleclick(){
  //   setCount(count + 1);
  // }

  // now with using usecallback
  const handleclick=useCallback(() => {setCount(count+1)},[]);


  return (
    <>
      <div>count is {count}</div>
      <br /><br />
      <div className="card">
        <button onClick={handleclick}>
          Increament : {count}
        </button>
      </div>
      <br /><br />
      <div>
        <Child btnname="click me" handleclick={handleclick}/>
      </div>
    </>
  )
}

export default App
