import React from 'react'

const child = React.memo((props) => {
    console.log('Component got re-render again');
  return (
    <div>
        <button onClick={props.handleclick}>{props.btnname}</button>
    </div>
  )
})

export default child

//React.meo->warp->component->component re-render tabi hoga jb props change honge nahi tho re-render nhi hoga

// if you are sending a function then react.meo will not save you from re-rendering