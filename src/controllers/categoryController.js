const ProductCategory = require('../models/categoryModel');
const sendErrorResponse = (res, error) => {
  res.status(500).json({ msg: error.message });
};

// Controller to add a new category to the database
const addCategory = async (req, res) => {
  const { name, descriptions } = req.body;

  try {
    const categoryExists = await ProductCategory.findOneAndUpdate({ name });
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
// const updateCategory = async (req, res) => {
//   const {name, descriptions} = req.body;
//   try {
//     const category = await ProductCategory.findById({_id: req.params.id,});
//     if(!category) {
//       return res.status(404).json({ msg: "Category not found!" });
//     }
//     if (name) {
//       category.name = name;
//     }
//     if (descriptions) {
//       category.descriptions = descriptions;
//     }
//     await category.save();
//     res.status(200).json({
//       msg: "Category updated sucessfully!",
//       category: category,
//       success: true,
//     });
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };
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

// const deleteCategory =async (req, res) => {
//   try {
//     const category = await ProductCategory.findByIdAndDelete(req.params.id);
//     if(!category) {
//       return res.json(404)({msg: "Category not found!"});
//     }
//     return res.json(200)({msg: "Category deleted successfully!"});
//   } catch(error) {
//     return res.json(500)({msg: error.message});
//   }
// };

module.exports = {addCategory, updateCategory};
