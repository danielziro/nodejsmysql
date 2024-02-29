import jwt from "jsonwebtoken";
import UserRepository from "../repositories/UserRepository.js";

export const verifyToken = async(req,res,next)=>{
    try{const token=req.headers["x-access-token"];
    console.log(token);
    if(!token)return res.status(403).json({ message:"no token provided"})


    const  decoded = jwt.verify(token,'abbbcc')
    console.log(decoded);
    req.userid = decoded.id
    const user = await UserRepository.getUser(req.userid);
    console.log(user);
    if(!user) return res.status(404).json({ message:"no user found"})
    next();
}catch{
    return res.status(401).json({message:"Unauthorized"})
}  

}