//** if you want to run this paste the below in app.jsx to get a output as increase count button.

// import React, { useState } from 'react';

// function App() {
  
//   return (
//     <div style= {{ background: "#dfe6e9", height: "100vh", }}>
//       <ToggleMessage/>
//       <ToggleMessage/>
//       <ToggleMessage/>
//       </div>  
//       //hot module replacement means whatever the changes you're doing in the file that will be autmatically reflected on the website, you don't have to restart the server everytime.This is what the vite gives you
//   )
// }
// //in react the variable that you're defining, define it as a state variable 
// const ToggleMessage = ()=>{
//   let [notificationCount, setNotificationCount] = useState (0); // useState is a React hook that returns an array with the current state value and a function to update it, initialized with a given value.

//   function increment(){
//     setNotificationCount(notificationCount+ 1)
//   }

//   return( <div>
//     <button onClick={increment}>
//      Increase Count
//     </button>
//     {notificationCount }
//   </div>
//   )

// }
// export default App


//************ if you want to update and see the linked in posts get updated paste the blow in app.jsx, when you click the button Add post it will add the post in your so called linked in

// import {PostComponent} from "./Post"
// import {useState} from "react"

// function  App(){


//   const [posts, setPosts]=useState([])//posts set to an empty array []
  

//   const PostComponents= posts.map(post=> <PostComponent
//     name= {post.name}
//     subtitle= {post.subtitle}
//     time= {post.time}
//     image= {post.image}
//     description= {post.description}
//   />)
//   function addPost(){
//     setPosts([...posts, {//let x= [1, 2, 3]
//                          // [...x, 4], so this line will add existing elements to the current element(operator name is "spread")
//                          //o/p: [1, 2, 3, 4]
//     name: 'harkirat',
//     subtitle: "1000 followers", 
//     time:"2m ago",
//     image:"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg", 
//     description: "want to know how to win big? Check out how these folks won $6000 in bounties."

//     }])
//   }


// return (
//   <div style= {{ background: "#dfe6e9", height: "100vh"}}>
//     <button onClick={addPost}>Add Post</button>
//     <div style={{display: "flex", justifyContent: "center"}}>
//       <div>
//         {PostComponents}
//       </div>
//     </div>
//   </div>
// )
// }
// export default App

//****** to make a so called notification bell button just copy paste the below code in app.jsx

// import {useState} from "react"

// const App= ()=>{
//   const[count, setCount]= useState(0)

//   const increaseCount= ()=>{
//     setCount(count+1)
//   }

//   return <div>
//     <div style= {{display: "flex"}}>
//       <div style={{background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5}}>
//         {count}
//       </div>
//     </div>
//     <img style= {{cursor: "pointer"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkeSc5BKFbXzaMFthFG0BYqMWL8fPeLRpZw&s"} width={40}/>
//     <button onClick= {increaseCount}>Increase the count</button>
//   </div>

 
// }

// export default App


//******** useEffect ( a timer like thingy)
// import { useEffect , useState} from "react"

// const App= ()=>{
//   const[count, setCount]= useState(1)

//   const increaseCount= ()=>{
//     // setCount(count+1)
//     //instead of using the above line we have to do it like this to make the code work as expected
//     // setCount(function(currentValue){
//     //   return currentValue+1;
//     // })
//     //instead of using the above line we can do like this
//     setCount(currentValue => currentValue+1)
//   }

//   useEffect(function(){
//     console.log("above setInterval")
//     const intervalId=setInterval(increaseCount, 1000)

//     return () =>{
//       clearInterval(intervalId)
//     }
  
 
//   }, [])//setInterval() is a JavaScript function that repeatedly executes a given function or code block at specified intervals (in milliseconds) until it is stopped. Syntax : setInterval(function, delay);

  
//   return <div> 
//     {count}
//   </div>

 
// }

// export default App
