const schema=require('./Schema')

const Signup=async(req,res)=>{
    const details=new schema({
        ...req.body
    })
    const{Email}=req.body 
    const verify=await schema.findOne({Email})

    if(verify){
     return res.json("You Have a Already Account")
    
    }

   await details.save()
   .then(() =>{
    console.log("You Registered Sucessfully");
    return res.json("Register Sucessfully")
})
  .catch(()=>{
    console.log("Something Wrong");
    return res.json("Try Again")
})


}

const Login=async(req,res)=>{

    const {Email,Password}=req.body
    const user= await schema.findOne({Email})
    if(!user){
      return  res.json("Invalid Email")
       
    }
   
   const match = (Password === user.Password)
   if(!match){
    res.json("User or Password is incorrect")
   
   }

res.json("Login Successfully")
console.log(user);
 
}

module.exports={Signup,Login}