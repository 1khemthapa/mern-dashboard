import { Admin } from "../models/admin.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login=async(req,res)=>{
    try {
        const {username,password}=req.body
        const admin=await Admin.findOne({username})
        if(!admin){
          return  res.json({message:"Username is incorrect"})
        }
        const isMatch=await bcrypt.compare(password,admin.password)
        if(!isMatch){
            return res.json({message:"Password is incorrect"})
        }
        const token=jwt.sign({
            id:admin._id,username:admin.username
        },process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
        res.json({message:"Login successful",token})
    } catch (error) {
        res.json({message:"server error"})
    }
}