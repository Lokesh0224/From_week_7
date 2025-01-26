// const express =require("express")
// const Router = express.Router

const {Router}= require("express")
const userRouter = Router()
const{userModel}= require("../db")
const z = require("zod")
const bcrypt= require("bcrypt")


userRouter.post("/signup", async(req, res)=>{//signup
    try{
        const requireBody= z.object({
            email: z.string().email().min(5).max(50),
            password:z.string().min(8).max(30),
            firstName: z.string().min(5).max(40),
            lastName: string().min(5).max(6)
        })
        
        const parsedDataWithSuccess= requireBody.safeParse(req.body)
        if(!parsedDataWithSuccess.success){
            res.json({
                message: "Incorrect format",
                error: parsedDataWithSuccess.error
            })
            return
        }
        // const email= req.body.email;
        // const passowrd= req.body.password;
        // const firstName= req.body.firstName;
        // const lastName= req.body.lastName;
        //the above is same as below == |
        const { email, password, firstName, lastName}= req.body

        const hashedPassword= await bcrypt.hash(password, 7)
        console.log(hashedPassword)


        await userModel.create({
            email: email, 
            password: password, 
            firstName: firstName, 
            lastName: lastName
        })

        res.json({
            message:"Signup succeeded"
        })
    }catch(e){
        console.log("Error during signup; ", e)

        res.status(500).json({
            message:"An error occured during signup", 
            error: error.message
        })
    }
    
})

userRouter.post("/signin", (req, res)=>{//signin
    res.json({
        message:"You're signed in"
    })
})

userRouter.get("/purchases", (req, res)=>{//user purchased courses
    res.json({
        message:""
    })
})

module.exports={
    userRouter:userRouter
}