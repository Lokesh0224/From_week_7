const {Router}= require("express")
const adminRouter= Router()
const {adminModel, courseModel}= require("../db")
const z= require("zod")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD}= require("../config")
const { adminMiddleware } = require("../middleware/admin")

adminRouter.post("/signup", async (req, res)=>{//signup
    try{
        const requireBody= z.object({
            email: z.string().email().min(6).max(30),
            password: z.string().min(8).max(30),
            firstName: z.string().max(30),
            lastName: z.string().max(30)
        })
        const parsedData= requireBody.safeParse(req.body)

        if(!parsedData.success){
            res.json({
                message:"Incorrect format",
                error: parsedData.error
            })
            return 
        }

        const {email, password, firstName, lastName}= req.body

        const hashedPassword= await bcrypt.hash(password, 7)
        console.log(hashedPassword)

        await adminModel.create({
            email: email, 
            password: hashedPassword, 
            firstName: firstName, 
            lastName: lastName
        })

        res.json({
            messagae: "Admin Signup successful"
        })        

    }
    catch(e){
        console.error("Error during signup", e)

        res.status(500).json({
            message:"You're signed in",
            error:e.message
        })
    }
})

adminRouter.post("/signin", async (req, res)=>{//signin
    const {email, password}= req.body

    const admin= await adminModel.findOne({
        email:email
    })
    if(!admin){
        res.status(403).json({
            message: "Admin is not found"
        })
        return
    }
    const passwordMatch= await bcrypt.compare(password, admin.password)
    if(passwordMatch){
        const token= jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD)

        res.json({
            message:"Signup successful",
            token: token
        })
    }
    else{
        res.json({
            message: "Incorrect creadentials"
        })
    }
    

})

adminRouter.post("/course", adminMiddleware,async (req, res)=>{//admin course creation
    const adminId= req.adminId

    const { title, description, price, imageUrl, creatorId} = req. body

    //watch creating a web3 saas in 6 hours, don't forget, harkirat's youtube channel
    const course = await courseModel.create({
        title: title,
        description: description, 
        price: price, 
        imageUrl: imageUrl, 
        creatorId: creatorId
        
    })

    res.json({
        message: "Course created", 
        courseId: course._id
    })


})

adminRouter.get("/course", (req, res)=>{
    res.json({
        message:""
    })
})

adminRouter.get("/course/bulk", (req, res)=>{//show the admin created courses
    res.json({
        message:""
    })
})

module.exports={
    adminRouter:adminRouter
}