const mongoose=require('mongoose')
const validation=new mongoose.Schema({
   UserName:String,
   Products:String
})
module.exports=mongoose.model('details',validation)