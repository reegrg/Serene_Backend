const express=require('express');
const userReviews = require('../controllers/userReviewsController');

const app=express();


app.post('/userReviews', userReviews); 

module.exports = app;