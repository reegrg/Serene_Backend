const mongoose=require('mongoose');
const {Schema}=mongoose; //destructure schema from mongoose
// const schema=mongoose.Schema(); //another way of above code

//Schema is used to provide the data structure
const userProductsSchema=new Schema({
    product:{
        type:String,
        requried: true
    },
   
    rating: {
        type:Number,
        required: true
    },
    message: {
        type:String,
        required: true
    }
    
});

const UserProducts=mongoose.model('UserProducts', userProductsSchema);
module.exports=UserProducts;