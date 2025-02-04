//THIS IS THE CODE FOR CHILDREN, paste this in app.jsx
/*
function App() {
  
    return <div style={{display: "flex"}}>
      <Card>hi there</Card>
      <Card><div style={{color: "green"}}>hello there</div></Card>
    </div>
  }
  
  const Card=({children})=>{
    return (
      <div style= {{border: '1px solid #ccc', 
        borderRadius: '5px', 
        padding:'20px', 
        margin: '10px', 
        boxShadow: '2px 2px 5px rgba(0, 0, 0,0.1)'
      }}>
        {children}
      </div>
    )
  }
  
  export default App
*/

//THIS IS THE CODE FOR LISTS AND KEYS

/*
function App() {
 
  const todos=[{
    key:1, 
    title: "Go to gym", 
    done: false
  }, {
    key:2,
    title: "Eat food", 
    done: true
  }]
  
  const todosComponents = todos.map(todo=><Todo key={todo.key} title= {todo.title} done={todo.done}/>)
  return (
    <div>
{todosComponents}
    </div>
  )
}

function Todo({title, done}){
  return <div>
    {title}-{done?"Done!":"Not done!"}
  </div>
}

export default App
*/

