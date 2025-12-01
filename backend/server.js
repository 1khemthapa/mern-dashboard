import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './src/configs/db.js'
const app=express()
const PORT=process.env.PORT ||5000

import userRouter from './src/routes/upload.route.js'
import productRouter from './src/routes/crud.route.js'
import loginRouter from './src/routes/login.route.js'
connectDB()
app.use(cors())
app.use(express.json())
app.use('/api/uploads',userRouter)
app.use('/api/product',productRouter)
app.use('/api/login',loginRouter)
app.get('/',(req,res)=>{
    res.json('')
})


app.listen(PORT,()=>{
    console.log(`Server is running on  PORT ${PORT}`)
})
