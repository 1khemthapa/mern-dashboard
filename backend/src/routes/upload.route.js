import express from 'express'
import multer from 'multer';
import { exceltoJson, getData } from '../controllers/uploadexcel.controller.js';

const userRouter=express.Router();
const upload=multer({dest:'uploads/'});


userRouter.post('/',upload.single('file'),exceltoJson
);
export default userRouter;