const mongoose= require("mongoose")
mongoose.connect("mongodb+srv://Lokesh0224:76MOX404UFEMMw0P@cluster0.kjsdz.mongodb.net/test5")
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    email:{type:String, unique: true}, 
    password: String, 
    firstName: String,
    lastName:String
})

const adminSchema = new Schema({
    email:{type:String, unique: true}, 
    password: String, 
    firstName: String,
    lastName:String
})

const courseSchema = new Schema({
    title:String, 
    description:String, 
    price: Number, 
    imageUrl:String, 
    creatorId: ObjectId
})

const purchaseSchema = new Schema({
    userId: ObjectId, 
    courseId: ObjectId
})

const userModel= mongoose.model("user", userSchema) //the details in the userSchema will get stored in the db collection named user
const adminModel= mongoose.model("admin", adminSchema)
const courseModel= mongoose.model("course", courseSchema)
const purchaseModel= mongoose.model("purchase", purchaseSchema)

module.exports= {
    userModel, 
    adminModel, 
    courseModel, 
    purchaseModel
}