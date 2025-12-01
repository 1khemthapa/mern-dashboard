import { Admin } from "../models/admin.model.js"
import bcrypt from 'bcrypt'
export const register =async(req,res)=>{
    const {username,password}= req.body
   try {

    const count=await Admin.countDocuments();
    if(count>=1){
        return res.json({message:"Admin account already exists. Only one admin allowed"})
    }
     if(!username || !password ){
         return res.json({message:"username and password are required"})
     }
     const existingAdmin=await Admin.findOne({username})
     if(existingAdmin){
         return res.json({message:"admin is already existed"})
     }
     const hashedPassword=await bcrypt.hash(password,10)
     const admin=new Admin({
        username,
        password:hashedPassword
     })
     await admin.save();
     return res.status(201).json({message:'Admin registered successfully'})
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}