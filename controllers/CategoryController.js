const asyncHandler = require("express-async-handler");
const Category = require("../models/CategoryModel");

//@desc Get all Categories
//@route GET /api/categories
//@access private
const getCategories = asyncHandler(  async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
  }  );


//@desc Create new Category
//@route POST /api/categories
//@access private
const createCategory = asyncHandler(async (req, res) => {
  const {name} = req.body;
  if(!name) {
   res.status(400);
   throw new Error("All Fileds Are Mandatory!");
  }
   const category = await Category.create({
    name,
   })
   res.status(200).json(category);
   });


//@desc Get Category
//@route GET /api/categories/:id
//@access private
const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if(!category){
    res.status(404);
    throw new Error("Category Not Found!");
  }
    res.status(200).json(category);
});

//@desc Update Category
//@route PUT /api/categories/:id
//@access private
const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if(!category){
    res.status(404);
    throw new Error("Category Not Found!");
  }
  const updatedCategory = await Category.findByIdAndUpdate(
                                          req.params.id,
                                          req.body,
                                          {new: true}
                                        )
    res.status(200).json(updatedCategory);
});

//@desc Delete Category
//@route DELETE /api/categories/:id
//@access private
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if(!category){
    res.status(404);
    throw new Error("Category Not Found!");
  }
    await Category.findByIdAndRemove(req.params.id);
    res.status(200).json({message:`Category is deleted for ${req.params.id}`});
});

module.exports= { getCategories, 
    createCategory, 
    getCategory, 
    updateCategory, 
    deleteCategory};