const mongoose =require("mongoose")
mongoose.connnect(process.env.MONGO_URL)
const Schema= mongoose.Schema
const ObjID= mongoose.Types.ObjectId

const userSchema = new Schema({
    email: {type: String, unique: true}, 
    password: String, 
    firstName: String, 
    lastName: String
})

const adminSchema= new Schema({
    email:{type: String, unique: true}, 
    password: String, 
    firstName: String, 
    lastName: String 

})

const courseSchema= new Schema({
    title: String, 
    description: String, 
    price: Number, 
    imageUrl: String

})

