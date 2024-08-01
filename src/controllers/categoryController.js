const ProductCategory = require('../models/categoryModel');
const sendErrorResponse = (res, error) => {
  res.status(500).json({ msg: error.message });
};

// Controller to add a new category to the database
const addCategory = async (req, res) => {
  const { name, descriptions } = req.body;

  try {
    const categoryExists = await ProductCategory.findOne({ name });
    if(categoryExists) {
      return res.status(400).json({ msg: "Category already exists!" });
    }
    const category = new ProductCategory({
      name,
      descriptions,
    });

    await category.save();


    res.status(201).json({
      msg: "Category added successfully",
      name: category,
    });
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

// update category controller
const updateCategory = async (req, res) => {
  try {
    const {name, descriptions} = req.body;
    let updateData = {name, descriptions};

    const category = await ProductCategory.findByIdAndUpdate(
      req.params.id,
      updateData,
      {new: true}
    )
    if(!category) {
      return res.status(404).json({ msg: "Product not found!" });
    }

    res.status(200).json({
      msg: "Category updated sucessfully!",
      category: category,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {addCategory, updateCategory};
