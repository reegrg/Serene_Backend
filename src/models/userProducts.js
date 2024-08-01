const mongoose=require('mongoose');
const {Schema}=mongoose; //destructure schema from mongoose
// const schema=mongoose.Schema(); //another way of above code

//Schema is used to provide the data structure
const productSchema=new Schema({
    name:{
        type:String,
        requried: true
    },
   
    price: {
        type:Number,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    reviews: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
    } 
});

const Products=mongoose.model('Products', productSchema);
module.exports=Products;