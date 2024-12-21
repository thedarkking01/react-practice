import { useState } from 'react'
import './App.css'
import LoginBtn from './components/loginbtn.jsx'  
import LogoutBtn from './components/logoutbtn.jsx'  

function App() {
  const [isLoginBtn, setLoginBtn] = useState(false) 

  if (!isLoginBtn) {
    return <LoginBtn/>
  }

  return (
    <div>
      <h1>wlecome to react practice........</h1>
      <div>
        {isLoginBtn && <LogoutBtn />}  
        {/* {!isLoginBtn && <LoginBtn />}   */}
      </div>
    </div>
  )


  // return (
  //   <div>
  //    {isLoginBtn ? <LoginBtn/> : <LogoutBtn/>}
  //   </div>
  // )

  // if (isLoginBtn) {
  //   return <LogoutBtn /> 
  // } else {
  //   return <LoginBtn /> 
  // }
}

export default App
