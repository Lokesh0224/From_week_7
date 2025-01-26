require('dotenv').config()
console.log(process.env.MONGO_URL)
const express = require("express")
const {userRouter}= require("./routes/user")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")
const mongoose = require("mongoose")


const jwt = require("jsonwebtoken")


const app = express()
app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/course", courseRouter)


async function main(){
    await mongoose.connect(process.env.MONGO_URL)
//study dotenv
    app.listen(3000, ()=>(
        console.log("Port is in localhost 3000")
    ))
}

main()