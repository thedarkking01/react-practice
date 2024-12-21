import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert('you clicked me why ?')
  }

  const hoverme = () => {
    alert('you hover me why ?')
  }
  function handleInputChange(e) {
    //console.log("Input me Value change hui h ");
    console.log("Value till now: ", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //i am writing my custom behaviour down 
    alert("Form Submit krdu kya ");
  }

  
  return (
    <div>

    {/* <button onClick={alert("Immediate invoke")}> // don't do this is Immediate invoke func this cause problems with rendering
      Click me
    </button> */}

    {/* <button onClick={() => alert("Immediate invoke")}>  // try this for solution 
      Click me 
    </button> */}

    {/* <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleInputChange}/>
      <button type='submit'>Submit</button>
    </form> */}
     {/* <div><p onMouseOver={hoverme}>this is a react practice</p></div>
      <div>
        <button onClick={handleClick}>click me</button>*/}
      </div> 
    
  )
}

export default App;
