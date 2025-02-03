import { useEffect , useState} from "react"

const App= ()=>{
  const[count, setCount]= useState(1)

  const increaseCount= ()=>{
    // setCount(count+1)
    //instead of using the above line we have to do it like this to make the code work as expected
    // setCount(function(currentValue){
    //   return currentValue+1;
    // })
    //instead of using the above line we can do like this
    setCount(currentValue => currentValue+1)
  }

  useEffect(function(){
    console.log("above setInterval")
    const intervalId=setInterval(increaseCount, 1000)

    return () =>{
      clearInterval(intervalId)
    }
  
 
  }, [])//setInterval() is a JavaScript function that repeatedly executes a given function or code block at specified intervals (in milliseconds) until it is stopped. Syntax : setInterval(function, delay);

  
  return <div> 
    {count}
  </div>

 
}

export default App