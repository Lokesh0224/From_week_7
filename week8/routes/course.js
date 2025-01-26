const {Router}=require("express")
const { userMiddlware } = require("../middleware/user")
const { purchaseModel, courseModel } = require("../db")
const courseRouter=Router()

courseRouter.get("/preview", async(req, res)=>{//available courses. For this entry we dont have to do the authentication coz we don't do login here to see the available courses
    const courses= await courseModel.find({})
    res.json({
        courses
    })
})


courseRouter.post("/purchase", userMiddlware, async (req, res)=>{//when the user wants to purchase a course
    const userId= req.userId
    const courseId= req.body.courseId

    await purchaseModel.create({
        userId, 
        courseId
    })
    
    
    res.json({
        message:"You've successfully bought the course"
    })
})

module.exports={
    courseRouter:courseRouter
}