const mongoose=require('mongoose');
const {Schema}=mongoose; //destructure schema from mongoose
// const schema=mongoose.Schema(); //another way of above code

//Schema is used to provide the data structure
const userProfileSchema=new Schema({
    name:{
        type:String,
        requried: true
    },
    email:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        requried:true
    },
    role:{
        type:String,
        requried:true
    }
    
});

const UserProfile=mongoose.model('UserProfile', userProfileSchema);
module.exports=UserProfile;