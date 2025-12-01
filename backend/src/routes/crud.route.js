import express from 'express'
import { addProduct, deleteProduct, editProduct, getData } from '../controllers/product.controller.js';
import { auth } from '../middleware/auth.js';
const productRouter=express.Router();

productRouter.get('/',getData)
productRouter.post('/',addProduct);
productRouter.put('/:id',editProduct);
productRouter.delete('/:id',deleteProduct);

export default productRouter;