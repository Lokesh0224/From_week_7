//App2 file the below one
//this is the first usecase of useRef that is when you click a button it will hilight the input box
/*
import { useRef, useState} from 'react'
function App2(){

    const inputRef= useRef()
    function focusOnInput(){
        // document.getElementById("name").focus()this approach and the below one gives the same output
        inputRef.current.focus()
    }
    return(
        <div>
            Sign up<br />
            <input ref = {inputRef}  type={"text"}></input><br/>
            <input type={"text"}></input><br/>
            <button onClick={focusOnInput}>Submit</button>

        </div>
    )
}

export default App2
*/