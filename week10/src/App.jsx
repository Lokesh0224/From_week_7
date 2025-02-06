import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"
import './App.css'

function App() {

  return (
    <div>
    
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout/>}> 
        <Route path="/neet/online-coaching-class-11" element= {<Class11Program/>} />
        <Route path="/neet/online-coaching-class-12" element= {<Class12Program/>} />
        <Route path="/" element= {<Landing/>} />
        <Route path="*" element= {<ErrorPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  ) 
}
// this * route is used when the user goes to the route which doesnt exist

function Header(){
  return (
    <div>
      <Link to="/">Allen</Link > |   
    <Link  to="/neet/online-coaching-class-11">Class-11</Link > |
    <Link  to="/neet/online-coaching-class-12">Class-12</Link ><br/>
    </div>
  )
}
function Layout(){
  return(<div style={{height:"100vh", background: "green"}}>
    <Header/>
    <div style={{height:"90vh", background: "red"}}>
    <Outlet/>
    </div>
  FOOTER
  </div>
  )

}
function ErrorPage(){
  return <>
  Sorry page not found
  </>
}

function Landing(){
  return <>
  Welcome to Allen!
  </>
}

function Class11Program(){
  return <>
  Welcome to the class 11 page!!
  </>
}

function Class12Program(){
  const navigate= useNavigate()
  /* useNaviagate is a custom hook which is used to 
    navigate to the route you provide */ 

  const redirectUser=()=>{
    navigate("/")
  }

  return <>
  Welcome to the class 12 page!!!<br/>
  <button onClick={redirectUser}>Go back to the landing page</button>
  </>
}

export default App
//npm install
/*npm install react-router-dom(this is for document object model)
like wise it has react-router-native or react-router-desktop etc....*/

//<> </> this is called fragment in react

/*you cannot use Link tag outside the BrowserRouter */

/* when you use anchor tag <a> instead of link tag there you'll see the 
loader in the website logo but when you use Link tag <Link> there will be 
no loader this makes the website single page application(SPA)*/