
import {useState, useEffect, memo} from 'react'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'


//memo= only changing if the prop change
function App(){
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  const [count, setCount]= useState(0)

  useEffect(()=>{
    setInterval(()=>{
      setCount(c=>c+1)
    }, 3000)
  }, [])
  //down instead of CurrentCount component im writing MemoizedCurrentCount because it will not re-render unless a prop changes or a state changes
  return <div>
    <MemoizedCurrentCount/>
    <MemoizedIncrease/>
    <Decrease/>
  </div>
}

const MemoizedCurrentCount= memo(CurrentCount)

function CurrentCount(){
  try{
   
    return <div>1</div>
  }
  catch(error){
    console.error("Error in CurrentCount", error)
    return <div>Something went wrong with the counter.</div>
  }
}

const MemoizedIncrease= memo(Increase)
function Increase(){

  return <div>
    <button onClick>Increase</button>
  </div>
}


const Decrease= memo(function(){
  return <div>
    <button onClick>Decrease</button>
  </div>
})


export default App