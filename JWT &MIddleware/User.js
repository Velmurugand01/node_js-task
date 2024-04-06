const mongoose=require('mongoose')

const Schema= new mongoose.Schema({
    User:String,
    EmailorPhone:String,
    Password:String
})
module.exports=mongoose.model("jwt",Schema)