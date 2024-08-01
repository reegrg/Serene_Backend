// controllers/productController.js

const Products = require("../models/userProducts");
const domain = "http://localhost:5000";

const sendErrorResponse = (res, error) => {
  res.status(500).json({ msg: error.message });
};

// add products
const addProduct = async (req, res) => {
  try {
  const {name, price, description, category, reviews} = req.body;

  let productData = { name, price, description, category, reviews };
  if (req.file) {
      const productImage = `${domain}/uploads/products/${req.file.filename}`;
      productData.productImage = productImage;
    }
  const product = new Products(productData);
  await product.save()
  res.status(201).json({
    msg: "Product created successfully",
    product: product,
    success: true,
  });
  }
  catch (error) {
    sendErrorResponse(res, error);
  }
};
// Controller to update products
const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category, reviews } = req.file.filename;
    let updateData = { name, price, description, category, reviews };

    if (req.file) {
      const productImage = `${domain}/uploads/products/${req.file.filename}`;
      updateData.productImage = productImage;
    }

    const product = await Products.findByIdAndUpdate(
      req.params.id,
      updateData,
      {new: true,}
    );

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    res.status(200).json({ 
      msg: "Product updated sucessfully",
      product: product,
      success: true,
     });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// // Controller to get products by category
// const getCategoryProducts = async (req, res) => {
//   try {
//     const products = await Products.findOne({ category: req.category._id }).populate(
//       'category',
//       ['name', 'price', 'description', 'reviews']
//     );
//     if (!products) {
//       return res.status(404).json({ msg: 'Category not found' });
//     }
//     res.status(200).json({ products });
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };

module.exports =  {addProduct, updateProduct};
