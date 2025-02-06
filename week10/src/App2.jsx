import { useRef, useState} from 'react'
//a clock with a start and stop button 

function App2(){
const [currentCount, setCount]= useState(1)
//the below code is not the optimzed code becuase there are two useState so twice the rerender will happen
// const [timer, setTimer]= useState(0)

// function startClock(){
//     let value= setInterval(function(){
//         setCount(c=>c+1)
//     }, 1000)
//     setTimer(value)
// }
 
// function stopClock(){
//     clearInterval(timer)
// }

//the optimsed way of writing the above code is the below one becasue we've used useRef 
// is a React Hook that allows you to persist values across renders without causing a re-render when the value changes
const timer= useRef()

function startClock(){
    let value= setInterval(function(){
        setCount(c=>c+1)
    }, 1000)
    timer.current= value 

}
function stopClock(){
    clearInterval(timer.current)
}

return <div>
    {currentCount}
    <br/>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop!</button>
</div>
    
}

export default App2