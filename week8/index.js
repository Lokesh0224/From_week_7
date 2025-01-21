const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.post("/user/signup", (req, res)=>{//signup
    res.json({
        message:"You're signed up"
    })
})

app.post("/user/signin", (req, res)=>{//signin
    res.json({
        message:"You're signed in"
    })
})

app.get("/user/purchases", (req, res)=>{//user purchased courses
    res.json({
        message:""
    })
})

app.get("/user/courses", (req, res)=>{//available courses
    res.json({
        message:""
    })
})

app.post("/course/purchase", (req, res)=>{//when the user wants to purchase a course
    res.json({
        message:""
    })
})


app.listen(3000, ()=>(
    console.log("Port is in localhost 3000")
))