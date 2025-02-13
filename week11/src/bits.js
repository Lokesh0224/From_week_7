//useState-> Store a state variable, re-render a component when the variable changes
//useEffect-> Run an effect whenever a dependency changes
//Custom hooks-> it is a function which start with "use" in the begining, 
// like "function useDebounce(){const [value, setValue]= useState(1)}". A function which is hook has a hook inside it

//CUSTOM HOOK
// import {useState} from 'react'

// //Custom hook= a function which starts with "use" uses another hook and returns some value which changes based on the inside hook
// function useCounter(){
//   const [count, setCount]= useState(0)

//   function increaseCount(){
//     setCount(count+1)
//     //or we can use setCount(c=>c+1)
//   }
//   return {
//     count: count, 
//     increaseCount:increaseCount
//   }

// }


// function App() {
//   const {count, increaseCount}= useCounter()

//   return <div>
//     <button onClick={increaseCount}>Increase Count: {count}</button>
//   </div>
// }

// export default App


//USEPREV HOOK

// import {useState} from 'react'
// import { usePrev } from './hooks/usePrev'

// function App(){
//   const [state, setState] = useState(0)
//   const prev= usePrev(state)

//   return(
//     <div>
//       <p>{state}</p>
//       <button onClick={()=>{
//         setState((curr)=>curr+1)
//       }}>Click</button>
//       <p>the previous value is {prev}</p>
//     </div>
//   )
// }

// export default App;


