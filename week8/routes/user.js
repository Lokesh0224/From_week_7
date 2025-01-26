// const express =require("express")
// const Router = express.Router

const {Router}= require("express")
const userRouter = Router()
const{userModel, purchaseModel, courseModel}= require("../db")
const z = require("zod")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
const { JWT_USER_PASSWORD}= require("../config")
const { userMiddlware } = require("../middleware/user")



userRouter.post("/signup", async(req, res)=>{//signup
    try{
        const requireBody= z.object({
            email: z.string().email().min(5).max(50),
            password:z.string().min(8).max(30),
            firstName: z.string().max(40),
            lastName: z.string().max(40)
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
            password: hashedPassword, 
            firstName: firstName, 
            lastName: lastName
        })

        res.json({
            message:"Signup succeeded"
        })
    }catch(e){
        console.error("Error during signup; ", e)

        res.status(500).json({
            message:"An error occured during signup", 
            error: e.message,
            
        })
    }
    
})

userRouter.post("/signin", async(req, res)=>{//signin
    const {email, password}= req.body

    const user= await userModel.findOne({
        email: email
    })
    if(!user){
        res.status(403).json({
            message: "User is not found"
        })
        return
    }

    const passwordMatch= await bcrypt.compare(password, user.password)
    //try cookie based authentication in future
    if(passwordMatch){
        const token= jwt.sign({
            id:user._id

        }, JWT_USER_PASSWORD)
        res.json({
            message:"Signin successful",
            token:token
        })
    }
    else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }

})
//purchasing a new course is defined in course.js
userRouter.get("/purchases", userMiddlware, async(req, res)=>{//user purchased courses
    const userId= req.userId
    const purchases= await purchaseModel.find({
        userId, 
    })
    const courseData= await courseModel.find({
        _id:{$in:purchases.map(x=>x.courseId)}
    })

    res.json({
        purchases, 
        courseData
    })
})

module.exports={
    userRouter:userRouter
}