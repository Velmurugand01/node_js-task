const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const cookies=require('cookie-parser')

// file required from another 
const Schema=require('./User')
const messageModel=require('./messgae')
const verifyToken=require('./middleware')
const cookieParser = require('cookie-parser')

require('dotenv').config()   // .env file la connect pnadrathuku
mongoose.connect(process.env.Database)
.then(()=>{
    console.log("Database is Connected Sucessfully");
})

.catch(()=>{
    console.log("Database is not  Connected");
})

// middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.post('/Signup',async(req,res)=>{
    const details= await new Schema({
        ... req.body
    })
    const{EmailorPhone}=req.body
    const Register= await Schema.findOne({EmailorPhone})  // true
    if(Register){

    return  res.json("Already You Have Account")
    }
   await details.save()
   res.json("Signup Successfully")
})
app.post('/Login',async(req,res)=>{
    const{EmailorPhone ,Password}=req.body   
      const verify=await Schema.findOne({EmailorPhone})  
      console.log(verify);
   if(!verify){
    res.json("Invalid Email")
   }

     const PasswordVerify=(Password===verify.Password)

     if(!PasswordVerify){
       res.json("Invalid Email or Password")
     
     }
     const token=jwt.sign({id:verify._id,EmailorPhone:verify.EmailorPhone},process.env.secretKey,{
      expiresIn:'3h'
     });
    
     res.cookie('jwt',token,{httpOnly:true})  
     res.json("Login Successfull");
     })

app.post('/Postdata',verifyToken,async(req,res)=>{
  const {message}=req.body
  if(!message){
    res.json("Message is required")
  }
  const userId=req.verify.id   

  console.log(userId);
  const newMessage= new messageModel({userId,message})

  await newMessage.save()
   return res.json("Message Saved Successsfully")
})

app.listen(process.env.port,()=>{
    console.log("server is listening in:",process.env.port);
})

