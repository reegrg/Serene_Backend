const express=require('express');
const  {addProduct, updateProduct} = require('../controllers/productController');
const { productImage } = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const app=express();


app.post('/addProduct', productImage.single('productImage'), addProduct);
app.put('/:id', authMiddleware, productImage.single('productImage'), updateProduct);


module.exports = app;