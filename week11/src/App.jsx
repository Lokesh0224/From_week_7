import {useState} from 'react'
import { usePrev } from './hooks/usePrev'
import { useRef } from 'react'

function useDebounce(originalFn){
  const currentClock= useRef()

  const fn= ()=>{
    clearTimeout(currentClock.current)
    currentClock.current= setTimeout(originalFn, 30)
  }
  return fn

}

function App(){
  function sendDataToBackend(){
    fetch("api.amazon.com/search/")
  }
  const debounceFn= useDebounce(sendDataToBackend)

  return (
    <>
    <input type="text" onChange={debounceFn}></input>
    </>
  )
}

export default App;


