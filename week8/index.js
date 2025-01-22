const express = require("express")
const {userRouter}= require("./routes/user")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")
const mongoose = require("mongoose")


const jwt = require("jsonwebtoken")


const app = express()

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/course", courseRouter)


async function main(){
    await mongoose.connect("mongodb+srv://Lokesh0224:76MOX404UFEMMw0P@cluster0.kjsdz.mongodb.net/coursera-app")
//study dotenv
    app.listen(3000, ()=>(
        console.log("Port is in localhost 3000")
    ))
}

main()