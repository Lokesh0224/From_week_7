const {Router}= require("express")
const adminRouter= Router()
const {adminModel}= require("../db")

adminRouter.post("/signup", (req, res)=>{//signup
    res.json({
        message:"You're signed up"
    })
})

adminRouter.post("/signin", (req, res)=>{//signin
    res.json({
        message:"You're signed in"
    })
})

adminRouter.post("/", (req, res)=>{//admin course creation
    res.json({
        message:""
    })
})

adminRouter.get("/", (req, res)=>{
    res.json({
        message:""
    })
})

adminRouter.get("/bulk", (req, res)=>{//show the admin created courses
    res.json({
        message:""
    })
})

module.exports={
    adminRouter:adminRouter
}