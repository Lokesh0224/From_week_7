import {useState} from "react"

const App= ()=>{
  const[count, setCount]= useState(0)

  const increaseCount= ()=>{
    setCount(count+1)
  }

  return <div>
    <div style= {{display: "flex"}}>
      <div style={{background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5}}>
        {count}
      </div>
    </div>
    <img style= {{cursor: "pointer"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkeSc5BKFbXzaMFthFG0BYqMWL8fPeLRpZw&s"} width={40}/>
    <button onClick= {increaseCount}>Increase the count</button>
  </div>

 
}

export default App