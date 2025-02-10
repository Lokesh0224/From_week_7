//ROLLING UP THE STATE

// import './App.css'
// import {useState} from 'react'

// function App() {
//   return <div>
//     <LightBulb/>
//   </div>
// }

// function LightBulb(){
//   const [bulbOn, setBulbOn]= useState(true)//As your application grows, you might find that multiple components need access to the same state. 
//   // Instead of duplicating state in each component, you can lift the state up to the LCA, allowing the common ancestor to manage it.
//   return <div>
//     <BulbState bulbOn= {bulbOn}/>
//     <ToggleBulbState setBulbOn={setBulbOn}/>
//   </div>
// }
// //bulbOn is the prop to the Bulb state component
// function BulbState({bulbOn}){
//   return <div>
//     {bulbOn? "Bulb on": "Bulb off"}
//   </div>
// }
// //setButton are props to the ToggleBulbState component
// function ToggleBulbState({setBulbOn}){
//   function toggle(){
//     setBulbOn(currentState => !currentState)
//     /*
//     setBulbOn(function(currentState){
//         if(currentState==true){
//           return false
//         }
//         else{
//           return true
//         }
//     })
//     */
//   }
//   return <div>
//     <button onClick={toggle}>Toggle the Bulb</button>
//   </div>
// }


// export default App


//PROP DRILLING

// import './App.css'
// import {useState} from 'react'
// //the method we've used here is called prop drilling which is 
// // used to pass the props in multiple levels
// function App() {
//   const [bulbOn, setBulbOn]= useState(true)
//   return <div>
//     <Light bulbOn= {bulbOn} setBulbOn={setBulbOn}/>
//   </div>
// }

// function Light(bulbOn, setBulbOn){
  
//   return <div>
//     <LightBulb bulbOn= {bulbOn}/>
//     <LightSwitch
//      setBulbOn={setBulbOn}/>
//   </div>
// }
// function LightBulb({bulbOn}){
//   return <div>
//     {bulbOn? "Bulb on": "Bulb off"}
//   </div>
// }

// function LightSwitch({setBulbOn}){
//   function toggle(){
//     setBulbOn(currentState => !currentState)
    
//   }
//   return <div>
//     <button onClick={toggle}>Toggle the Bulb</button>
//   </div>
// }
// //there are many problem with prop drilling so we'll use context api


// export default App
