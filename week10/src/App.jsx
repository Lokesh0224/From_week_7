import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Link to="/">Allen</Link > |   
    <Link  to="/neet/online-coaching-class-11">Class-11</Link > |
    <Link  to="/neet/online-coaching-class-12">Class-12</Link ><br/>
    <Routes>
      <Route path="/neet/online-coaching-class-11" element= {<Class11Program/>} />
      <Route path="/neet/online-coaching-class-12" element= {<Class12Program/>} />
      <Route path="/" element= {<Landing/>} />
    </Routes>
    </BrowserRouter>
    </>
  ) 
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
  return <>
  Welcome to the class 12 page!!!
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