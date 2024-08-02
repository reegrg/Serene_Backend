const express=require('express');
const  {addProduct, updateProduct, getProduct, getAllProducts, getProducts} = require('../controllers/productController');
const { productImage } = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const app=express();


app.post('/addProduct', productImage.single('productImage'), addProduct);
app.patch('/:id', authMiddleware, productImage.single('productImage'), updateProduct);
app.get('/getAllProducts', getAllProducts );
app.get('/:id', getProduct);
app.get('/', getProducts);


module.exports = app;