import express from 'express'
import { login } from '../controllers/login.controller.js'
import { register } from '../controllers/register.controller.js'
import { auth } from '../middleware/auth.js'
const loginRouter=express.Router()

loginRouter.post('/register',register)
loginRouter.post('/login',login)
export default loginRouter;