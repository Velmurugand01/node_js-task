const mongoose=require('mongoose')
const messageSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,  
        ref:'jwt'   
    },
    message:String,

})
module.exports=mongoose.model('message',messageSchema)