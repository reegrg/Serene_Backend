const express=require('express');
const UserReviews = require('../models/userReviews');
const router = express.Router();

const userReviews=(req, res) => {
    const {product, rating, message} = req.body;

    const newUserReviews = new UserReviews({product, rating, message}); //creates instances
    newUserReviews
    .save()
    .then((data) => {
        res
        .status(201)
        .json({message: 'product reviewed sucessfully', data});
    })
    .catch((err) => {
        res.status(500).json({messsage:'Error occured!', err});
    })

}

module.exports=userReviews;