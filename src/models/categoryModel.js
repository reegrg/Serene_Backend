const mongoose=require('mongoose');
const {Schema}=mongoose; //destructure schema from mongoose
// const schema=mongoose.Schema(); //another way of above code

//Schema is used to provide the data structure
const CategorySchema=new Schema({
    name:{
        type:String,
        requried: true
    },
   
    descriptions: {
        type: String,
        required: true
    }
    
});

const ProductCategory=mongoose.model('Category', CategorySchema);
module.exports=ProductCategory;