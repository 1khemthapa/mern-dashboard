import mongoose from 'mongoose'
import moongoose, { mongo } from 'mongoose'
const adminSchema=new moongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
export const Admin=mongoose.model('Admin',adminSchema)