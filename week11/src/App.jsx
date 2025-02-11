import {useState} from 'react'

//Custom hook= a function which starts with "use" uses another hook and returns some value which changes based on the inside hook
function useCounter(){
  const [count, setCount]= useState(0)

  function increaseCount(){
    setCount(count+1)
    //or we can use setCount(c=>c+1)
  }
  return {
    count: count, 
    increaseCount:increaseCount
  }

}


function App() {
  const {count, increaseCount}= useCounter()

  return <div>
    <button onClick={increaseCount}>Increase Count: {count}</button>
  </div>
}

export default App
