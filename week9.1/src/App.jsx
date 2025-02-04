
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
 