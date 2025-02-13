//Atom: When an atom's state changes, all components that subscribe to that atom will re-render
//by using recoil we have made our application more optimal

import {useState} from 'react'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
//1)npm install recoil
//2)import {RecoilRoot} from 'recoil'
//You have to wrap your application inside your RecoilRoot
import {counterAtom } from './store/atom/counter'


function App(){
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  
  return <div>
    <CurrentCount/>
    <Increase/>
    <Decrease/>
  </div>
}



//step2: is to define the atom that we have did in a file named called counter
//step3: useRecoilValue of counterAtom
function CurrentCount(){
  try{
    const count= useRecoilValue(counterAtom)//now you're using the counter which is defined in counter.js
    if(count===undefined){
      return <div>Loading...</div>
    }
    return <div>{count}</div>
  }
  catch(error){
    console.error("Error in CurrentCount", error)
    return <div>Something went wrong with the counter.</div>
  }
}

function Increase(){

  const setCount= useSetRecoilState(counterAtom)
  return <div>
    <button onClick={()=>setCount(c=>c+1)}>Increase</button>
  </div>
}

function Decrease(){
  const setCount= useSetRecoilState(counterAtom)
  return <div>
    <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
  </div>
}


export default App