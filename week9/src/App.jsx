import React, { useState } from 'react';

function App() {
  
  return (
    <div style= {{ background: "#dfe6e9", height: "100vh", }}>
      <ToggleMessage/>
      <ToggleMessage/>
      <ToggleMessage/>
      </div>  
      //hot module replacement means whatever the changes you're doing in the file that will be autmatically reflected on the website, you don't have to restart the server everytime.This is what the vite gives you
  )
}
//in react the variable that you're defining, define it as a state variable 
const ToggleMessage = ()=>{
  let [notificationCount, setNotificationCount] = useState (0); // useState is a React hook that returns an array with the current state value and a function to update it, initialized with a given value.

  function increment(){
    setNotificationCount(notificationCount+ 1)
  }

  return( <div>
    <button onClick={increment}>
     Increase Count
    </button>
    {notificationCount }
  </div>
  )

}
export default App
