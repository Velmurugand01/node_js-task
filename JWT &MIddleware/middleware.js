const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token =req.cookies.jwt 

    if(!token){
        return res.json("Authentication required")  //token cookies la iruka illayanu pakum 
    }

    jwt.verify(token,process.env.secretKey,(err,decoded)=>{
   if(err){
    res.json("'Failed to authenticate token'")
   }

   req.verify=decoded
   console.log(req.verify);
   next()
    })

}


module.exports=verifyToken