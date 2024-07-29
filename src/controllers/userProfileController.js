
const express=require('express');
const UserProfile = require('../models/userProfile');
const router=express.Router();

//controller to add a new user profile to the database
const userProfile=(req, res)=>{

    const {name, email, password, role} = req.body;

    // const data = req.body;
    // const userName = data.name;
    // const userEmail = data.email;

    const newUserProfile = new UserProfile({name, email, password, role}); // creates instances
    // const newUserProfile = new UserProfile({
    //     name: userName,
    //     email: userEmail});
    newUserProfile
    .save()
    .then((data) => {
        res
        .status(201)
        .json({message: "User profile added sucessfully", data});
    })
    .catch((err) => {
        res.status(500).json({message: "Error occured", err});
    })

}

module.exports=userProfile;