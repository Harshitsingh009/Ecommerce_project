import jwt from "jsonwebtoken"

const adminAuth = async (req,res,next) =>{
    try {
        const {token} = req.headers

        if(!token){
            return res.json({success:false ,message:"Not Authorized please login again"})
        }

        const token_decode = jwt.verify(token,process.env.JWT_SECRET)

        if(token_decode.email !== process.env.ADMIN_EMAIL){
            return res.json({success:false ,message:"Not Authorized please login again"})
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default adminAuth

/*
const auth = (req,res,next)=>{
   const token = req.headers.authorization?.split(" ")[1]
   const decoded = jwt.verify(token, process.env.JWT_SECRET)
   req.user = decoded   // token ka payload
   next()
}
   admin next middleware 
*/