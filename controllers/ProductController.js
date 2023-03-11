const asyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");

//@desc Get all Products
//@route GET /api/products
//@access private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
  });

  //@desc Get Products based on Category
//@route GET /api/products/:category
//@access private
const getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({category_id: req.params.category_id});
  res.status(200).json({products});
  });


//@desc Create new Product
//@route POST /api/products
//@access private
const createProduct = asyncHandler(async (req, res) => {
  const {title, desc, price, stock, category_id} = req.body;
  if(!title || !desc || !price || !stock ||!category_id) {
   res.status(400);
   throw new Error("All Fileds Are Mandatory!");
  }
   const product = await Product.create({
     title,
     desc,
     price,
     stock,
     category_id: category_id,
   })
   res.status(200).json(product);
   });


//@desc Get Product
//@route GET /api/products/:id
//@access private
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(!product){
    res.status(404);
    throw new Error("Product Not Found!");
  }
    res.status(200).json(product);
    });

//@desc Update Prodouct
//@route PUT /api/products/:id
//@access private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(!product){
    res.status(404);
    throw new Error("Product Not Found!");
  }
  const updatedProduct = await Product.findByIdAndUpdate(
                                          req.params.id,
                                          req.body,
                                          {new: true}
                                        )
    res.status(200).json(updatedProduct);
});

//@desc Delete Product
//@route DELETE /api/products/:id
//@access private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(!product){
    res.status(404);
    throw new Error("Product Not Found!");
  }
    await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({message:`Product is deleted for ${req.params.id}`});
});

module.exports= { 
    getProducts, 
    getProductsByCategory,
    createProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct};