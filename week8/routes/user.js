// const express =require("express")
// const Router = express.Router

const {Router}= require("express")

const userRouter = Router()


userRouter.post("/user/signup", (req, res)=>{//signup
    res.json({
        message:"You're signed up"
    })
})

userRouter.post("/user/signin", (req, res)=>{//signin
    res.json({
        message:"You're signed in"
    })
})

userRouter.get("/user/purchases", (req, res)=>{//user purchased courses
    res.json({
        message:""
    })
})

module.exports={
    userRouter:userRouter
}