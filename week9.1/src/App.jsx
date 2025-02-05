import React from "react"

function App() {
  return (
    <div>
      <ClassCounter/>
    </div>
  )
}


function MyComponent(){
  const [count, setCount]= useState(0)

  useEffect(()=>{
    console.log('Component mounted or count updated ');

  }, [count])

  useEffect(()=>{
    console.log('component mounted')
    return ()=>{
      console.log('Component will unmount')
      
    }
  }, [])
  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={() =>setCount(count+1)}></button>
    </div>
  )
}

 export default App