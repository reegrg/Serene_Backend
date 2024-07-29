const express=require('express');
const userAddress = require('../controllers/userAddressController');
const app=express();

app.post('/userAddress', userAddress);

module.exports=app;