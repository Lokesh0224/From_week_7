const mongoose=require("mongoose")
const Schema= mongoose.Schema;//Schema is a part of mongoose library which will allow us to deifne the structure of the data
const ObjectId= mongoose.ObjectId


const User= new Schema({
    email:{type:String, unique:true}, 
    password: String, 
    name: String

})

const Todo = new Schema({
    title: String,
    done:Boolean,
    userId: ObjectId

})

const UserModel= mongoose.model("users_info", User)//this line says from the information i got in the Userschema i want to push it to the users_info in the mongodb database 
const TodoModel= mongoose.model("users_todo", Todo)

module.exports= {
    UserModel: UserModel,
    TodoModel: TodoModel
}
