
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
 