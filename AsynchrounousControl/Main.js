const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router=require('./router')
require('dotenv').config();

mongoose.connect(process.env.database)

.then(()=>{
    console.log("Database is Conneceted Successfully");
})
.catch(()=>{
    console.log("Database is not Conneceted");
})
//middleware
app.use(express.urlencoded ({extended:false}))

//like app.post('/router,function)
app.use('/api',router)

app.listen(process.env.Port,()=>{
    console.log("Server is Running",process.env.Port);
})