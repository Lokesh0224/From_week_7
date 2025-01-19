const express= require("express")
const {UserModel, TodoModel}=require("./db")
const jwt= require("jsonwebtoken")
const mongoose= require("mongoose")
const JWT_SECRET="lokeshlove"


mongoose.connect("mongodb+srv://Lokesh0224:76MOX404UFEMMw0P@cluster0.kjsdz.mongodb.net/todo_app333")
const app= express()
app.use(express.json());

app.post("/signup", async (req, res)=>{//we're using async await because the database have to insert the userdetails to the server which somewhere in the world, so it may happen or may not happen 
    const email=req.body.email
    const password= req.body.password
    const name= req.body.name

    await UserModel.create({
        email:email, 
        password: password, 
        name: name
    })

    res.json({
        message:"You are logged in"
    })
})

app.post("/signin", async (req, res)=>{
    const email= req.body.email
    const password= req.body.password

    const user=await UserModel.findOne({//this is also a database call so we're using async and await
        email:email, 
        password:password
    })

    console.log(user)

    if(user){
        const token=jwt.sign({
            id:user._id.toString()
        }, JWT_SECRET)
        res.json({
            message:"Sign-in successful", 
            token:token
        })
    }
    
    else{
        res.status(403).json({message:"Incorrect credentials"})
    }
})

app.post("/todo", auth,(req, res)=>{
    const userId=req.userId
    const title= req.body.title
    const done=req.body.done
    TodoModel.create({
        title, 
        userId, 
        done
    })

    res.json({
        userId: userId
    })
})

app.get("/todos", auth,async (req, res)=>{
    const userId=req.userId
    const todos=await TodoModel.find({
        userId:userId
    })
    res.json({
        todos
    })
})

function auth(req, res, next){
    const token= req. headers.token
    const decodedInformation= jwt.verify(token, JWT_SECRET)//this will return a json object
    const userId=decodedInformation.id
    if(userId){
        req.userId=userId
        next()
    }
    else{
        res.json({
            message:"you aren't logged in"
        })
    }
    
}

app.listen(3000, ()=>{
    console.log("Server is running in the port 3000")
})