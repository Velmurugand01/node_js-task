const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router=require('./Router')  
require('dotenv').config(); 

mongoose.connect(process.env.database)
.then(()=>{
    console.log("Database is connected Sucessfully");
})
.catch(()=>{
    console.log("Database is not connected");
})


app.use(express.json())
app.use(express.urlencoded ({extended:false}))


app.use('/api',router)


app.listen(process.env.Port,()=>{
    console.log("Server is running:",process.env.Port);
})