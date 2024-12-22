import { useState } from 'react'
import './App.css'
import Child3 from './components/child3'  
import { createContext } from 'react'


export const Usertheme=createContext();
//s-1:create context 
// const Usercontext=createContext();
//s-2: wrap all the child inside providre
//s-3: pass the value
//s-4: consumer k under jake consume kr lo
function App() {
  // const [user, setuser] = useState({name:'Sourabh'})
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Usertheme.Provider value={theme}>
        <div style={{backgroundColor:theme==='light'?'beige':'black'}}>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <Child3 />  
        </div>
      </Usertheme.Provider>
    </>


    // <>
    //  <Usercontext.Provider value={user}>
    //     <Child3 />  
    //   </Usercontext.Provider>
    // </>
  )
}
export default App
// export {Usercontext}
