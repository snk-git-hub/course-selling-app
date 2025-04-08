const express =require("express");
const userRouter =express.Router();
const {userModel, purchaseModel}=require("../db")
const jwt =require("jwt-simple");
const bcrypt =require("bcrypt");

const secret = process.env.JWT_SECRET;



//signup
userRouter.post("/signup",async (req,res)=>{
    
    const {email,password,firstname,lastname}=req.body;




    try{
    
        const hash =await bcrypt.hash(password,10);

    await userModel.create({
        email:email,
        password :hash,
        firstname:firstname,
        lastname:lastname

    })
    res.json({
        message:"signup sucessfull"
    })
}
catch(error){
 
        res.status(500).json({message:"internal server error",error});

}
});


//signin
userRouter.post("/signin",async(req,res)=>{
    const{email,password}=req.body;

    try{
const user =await userModel.findOne({
    email:email,
});

if(!user){
  return res.status(400).json({message:"user not found"});
}

const isPasswordValid =await bcrypt.compare(password,user.password);

if(!isPasswordValid){
    return res.status(401).json({message:"password invalid"});
}

const payload ={email:user.email,id:user._id};
const token= jwt.encode(payload,secret);


    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        maxAge:60*60*1000,
        sameSite:"strict"
    })
    res.json({
        token,
        message:"log in sucessful!"
    })
}catch(error){
    console.log("SIGNIN ERROR:", error);

   res.status(500).json({message:"internal server error",error})
}
});

// Purchase
userRouter.post("/purchase",async(req,res)=>{

  const userId=req.userId;

  const purchases=await purchaseModel.find({userId})

  let purchasedCourseIds =  purchases.map(p => p.courseId);

  const coursesData = await courseModel.find({
    _id: { $in: purchasedCourseIds }
});

res.json({
    purchases,
    coursesData
});

})




module.exports={
    userRouter:userRouter
}