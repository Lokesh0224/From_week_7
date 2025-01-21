const {Router}=require("express")
const courseRouter=Router()

app.get("/preview", (req, res)=>{//available courses
    res.json({
        message:""
    })
})

app.post("/purchase", (req, res)=>{//when the user wants to purchase a course
    res.json({
        message:""
    })
})

module.exports={
    courseRouter:courseRouter
}