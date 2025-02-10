import './App.css'
import {useState, createContext, useContext} from 'react'
//step 1:define the context
const BulbContext= createContext()

function BulbProvider({children}){
  //step2: provide the context
  const [bulbOn, setBulbOn]=useState(true)

  return (<BulbContext.Provider value={{
    bulbOn: bulbOn, 
    setBulbOn:setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
  )
}

function App() {
  return <div>
    <BulbProvider>
      <Light/>
    </BulbProvider>
  </div>
}

function Light(){
  
  return <div>
    <LightBulb />
    <LightSwitch/>
  </div>
}
//step 3:use the context
function LightBulb(){
  const {bulbOn}= useContext(BulbContext)
  return <div>
    {bulbOn? "Bulb on": "Bulb off"}
  </div>
}

function LightSwitch(){
  const {bulbOn, setBulbOn}= useContext(BulbContext)
  function toggle(){
    setBulbOn(!bulbOn)
    
  }
  return <div>
    <button onClick={toggle}>Toggle the Bulb</button>
  </div>
}

export default App
