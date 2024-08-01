const express=require('express');
const userProfile = require('../controllers/userProfileController');
const app=express();


app.post('/userProduct', userProfile); 

module.exports = app;