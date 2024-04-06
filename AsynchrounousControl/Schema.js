const mongoose=require('mongoose')

const validation=new mongoose.Schema({
    Email:String,
     User:String,
    Password:String
})

module.exports=mongoose.model("Form",validation)