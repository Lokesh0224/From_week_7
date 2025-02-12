import {useState} from 'react'
import { usePrev } from './hooks/usePrev'

function App(){
  const [state, setState] = useState(0)
  const prev= usePrev(state)

  return(
    <div>
      <p>{state}</p>
      <button onClick={()=>{
        setState((curr)=>curr+1)
      }}>Click</button>
      <p>the previous value is {prev}</p>
    </div>
  )
}

export default App;


