import {createContext, useContext, useState} from 'react' 

//1) create context
const CountContext= createContext()

function CountContextProvider({children}){
  const [count, setCount]= useState(0)

//2)provide the context
  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent(){
  return <div>
    <CountContextProvider>
      <Increase/>
      <Decrease/>
      <Value/>
    </CountContextProvider>
  </div>
  
}

function Decrease(){
  //3)use of context
  const {count, setCount}= useContext(CountContext)
  return <button onClick={()=>{setCount(count-1)}}>Decrease</button>
}

function Increase(){
  const {count, setCount}= useContext(CountContext)
  return <button onClick={()=>{setCount(count +1)}}>Increase</button>

}

function Value(){
  const {count}= useContext(CountContext)
  return <p>Count: {count}</p>
}

function App(){
  return <div>
    <Parent/>
  </div>
}




export default App