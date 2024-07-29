const mongoose=require('mongoose');
const {Schema}=mongoose; //destructure schema from mongoose
// const schema=mongoose.Schema(); //another way of above code

//Schema is used to provide the data structure
const userOrderSchema=new Schema({
    name:{
        type:String,
        requried: true
    },
    email:{
        type:String,
        requried:true
    },
    phone: {
        type:Number,
        required: true
    },
    address: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const UserOrder=mongoose.model('UserOrder', userOrderSchema);
module.exports=UserOrder;