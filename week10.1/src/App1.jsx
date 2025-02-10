import React, {createContext, useContext, useState} from 'react'

const CountContext= createContext()

function CountContextProvider({children}){
    const [count, setCount]= useState(0)

    return(<CountContext.Provider value={{count, setCount}}>
        {children}
    </CountContext.Provider>)
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
    const {count, setCount}= useContext(CountContext)
    return <button onClick={()=>{setCount(count-1)}}>Decrease</button>
}

function Increase(){
    const {count, setCount}= useContext(CountContext)
    return <button onClick={()=>{setCount(count+1)}}>Increase</button>
}

function Value(){
    const {count}= useContext(CountContext)
    return<p>Count: {count}</p>
}


function App1(){
    return <div>
        <Parent/>
    </div>
}
export default App1