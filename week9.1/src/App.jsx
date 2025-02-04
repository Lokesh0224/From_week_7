import React from "react"

function App() {
 
  return (
    <div>
      <MyComponent/>    
    </div>
  )
}


// function MyComponent(){
//   return <div style={{backgroundColor: 'blue', color: "white"}}>
//     Hello, World!
//   </div>
// }
 
//or the below

 const componentStyles= {backgroundColor: 'red' , color: 'white', padding: 10,borderRadius: 20}
//compnentStyles is an object that is passed into the style in the div
 function MyComponent(){
  return (
  <div style={componentStyles}>
    Hello, World!
    </div>)
 }

 export default App