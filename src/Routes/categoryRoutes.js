const express=require('express');
const {addCategory, updateCategory}  = require('../controllers/categoryController');

const app=express();


app.post('/category', addCategory); 
app.patch('/:id', updateCategory);

module.exports = app;