import react, {useState, useEffect} from "react"

const App= ()=>{
  const[showTimer, setShowTimer]= useState(true)
 
  useEffect(()=>{
    setInterval(function(){
      setShowTimer(currentValue=>!currentValue);
    }, 5000)
  }, [])

  return <div>
    {showTimer &&<Timer/>}
  </div>
}

 
 
const Timer=()=>{
  const [seconds, setSeconds]= useState(0)

  useEffect(()=>{
    setInterval(()=>{
      setSeconds(prev=>prev+1)
    }, 1000)

    return ()=>{
      clearInterval()//when ever this timer is not in use this will unmount the backend
    }

  }, [])

  return <div>{seconds} seconds elapsed</div>
}
export default App  