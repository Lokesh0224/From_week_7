

function App() {
  
  return (
    <div style= {{ background: "#dfe6e9", height: "100vh", }}>
      <div style={{ display:" flex", justifyContent: "center"}}>
      <div>
      <div>
      <Postcomponent/>
      </div>
      <br/>
      <div>
      <Postcomponent/>
      </div>
      <br/>
      <div>
      <Postcomponent/>
      </div>

      </div>
      </div>
      
      </div>
      //hot module replacement means whatever the changes you're doing in the file that will be autmatically reflected on the website, you don't have to restart the server everytime.This is what the vite gives you
  )
}
const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding:20 }
  
function Postcomponent(){
  return <div style= {style}>
   <div style= {{ display: "flex"}}>
   <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style= {{
    width: 30, 
    height: 30, 
    borderRadius: 30
  }}/>
   <div style= {{ fontSize: 12, marginLeft: 10}}>
    <b>
      100xdevs
    </b>
    <div>23888 followers</div>
    <div>12m</div>
  </div>

  </div>
  <div style= {{fontSize: 12 }}>
  Want to know how to win big? Check how these folks won $6000 in bounties.
</div>
</div>
}
export default App
