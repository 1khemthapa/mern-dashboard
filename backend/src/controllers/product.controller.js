import { Product } from "../models/product.model.js";

export const getData=async(req,res)=>{
   try {
     const products=await Product.find()
     res.json({success:true,products})
   } catch (error) {
    res.json({success:false,error:error.message})
   }
}
export const addProduct=async(req,res)=>{
    try {
        const products=await Product.create(req.body)
        res.json({success:true,products})
    } catch (error) {
     res.json({success:false,error:error.message})   
    }
}
export const editProduct=async(req,res)=>{
  try {
    const updated=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({success:true,updated})
  } catch (error) {
    res.json({success:false,error:error.message})
  }
}
export const deleteProduct=async(req,res)=>{
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({success:true,message:'Product deleted'})
  } catch (error) {
    res.json({success:false,error:error.message})
  }
}