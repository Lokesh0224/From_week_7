const express= require("express")
const {UserModel, TodoModel}=require("./db")
const jwt= require("jsonwebtoken")
const mongoose= require("mongoose")
const JWT_SECRET="lokeshlove"
const bcrypt= require("bcrypt")
const {z} = require("zod")

mongoose.connect("mongodb+srv://Lokesh0224:76MOX404UFEMMw0P@cluster0.kjsdz.mongodb.net/todos-app-week-7-2")
const app= express()
app.use(express.json());

app.post("/signup", async (req, res)=>{//we're using async await because the database have to insert the userdetails to the server which somewhere in the world, so it may happen or may not happen 
    //input validation &  npm install zod
    //you have to describe schema in the zod object
    //like this 
    //req.body{
    //     email:string, 
    //     password: string, 
    //     name:string
    // }

    const requireBody= z.object({
        email: z.string().min(6).max(100).email(),
        password: z.string().min(6).max(100), 
        name: z.string().min(6).max(30)
    })

    //const parsedData=requireBody.parse(req.body) , but parse will throw an error
    const parsedDataWithSuccess= requireBody.safeParse(req.body)//the safeParse wont throw you an error  

    

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email=req.body.email
    const password= req.body.password
    const name= req.body.name

    
        const hashPassword= await bcrypt.hash(password, 5)//synatx for hash is bcrypt.hash(myPlaintextPassword, slatRound, function(err, hash){})
        console.log(hashPassword)

        await UserModel.create({//this will throw an error if the constrain is not satisfied means if the email is not uniquie then it will throw an error
            email:email, 
            password: hashPassword, 
            name: name
        })
    
        res.json({
            message:"You're signed up"
        })
        
})

app.post("/signin", async (req, res)=>{
    const email= req.body.email
    const password= req.body.password

    const user=await UserModel.findOne({//this is also a database call so we're using async and await
        email:email
     })

    if(!user){
        res.status(403).json({
            message:"User doesn't exist in our db"
        })
        return 
    }
    
    const passwordMatch=await bcrypt.compare(password, user.password)//(password) is the password the user has sent in the sign-in end point, and (user.password)is the hashed password that is stored in the db
    //this compare function will decode the hashed password that is it will get the salt and the users plaintext password
    if(passwordMatch){
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
        return 
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