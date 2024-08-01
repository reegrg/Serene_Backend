// middleware/setCategory.js

const ProductCategory = require("../models/categoryModel");

const setCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    if (!categoryId) {
      return res.status(400).json({ msg: 'Category ID is required' });
    }

    const category = await ProductCategory.findById(categoryId);
    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    req.category = category;
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = setCategory;
