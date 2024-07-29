const express=require('express');
const UserAddress = require('../models/userAddress');
const router = express.Router();

const userAddress=(req, res) => {
    const {name, street, city, zipCode, phone} = req.body;

    const newUserAddress = new UserAddress({name, street, city, zipCode, phone}); //creates instances
    newUserAddress
    .save()
    .then((data) => {
        res
        .status(201)
        .json({message: 'User Address added sucessfully', data});
    })
    .catch((err) => {
        res.status(500).json({messsage:'Error occured!', err});
    })

}

module.exports=userAddress;