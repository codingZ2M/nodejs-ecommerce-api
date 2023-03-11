const asyncHandler = require("express-async-handler");
const Order = require("../models/OrderModel");

//@desc Get all Orders
//@route GET /api/orders
//@access private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user_id: req.user.id});
  res.status(200).json(orders);
  });


//@desc Create new Order
//@route POST /api/orders
//@access private
const createOrder = asyncHandler(async (req, res) => {
  const {title, qty, size, color, date, product_id, category_id} = req.body;
  if(!title || !qty || !product_id || !category_id) {
   res.status(400);
   throw new Error("Title, Qty, Product ID, Category ID Fileds Are Mandatory!");
  }
   const order = await Order.create({
    user_id: req.user.id,
     title,
     qty,
     size,
     color,
     date,
     product_id: product_id,
     category_id: category_id,
   })
   res.status(200).json(order);
   });


//@desc Get Order
//@route GET /api/orders/:id
//@access private
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if(!order){
    res.status(404);
    throw new Error("Order Not Found!");
  }
    res.status(200).json(order);
    });

//@desc Update Order
//@route PUT /api/orders/:id
//@access private
const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if(!order){
    res.status(404);
    throw new Error("Order Not Found!");
  }
  if(order.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You don't have an access to modify the other user's order!")
}

  const updatedOrder = await Order.findByIdAndUpdate(
                                          req.params.id,
                                          req.body,
                                          {new: true}
                                        )
    res.status(200).json(updatedOrder);
});

//@desc Delete Order
//@route DELETE /api/orders/:id
//@access private
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if(!order){
    res.status(404);
    throw new Error("Order Not Found!");
  }
  if(order.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You don't have an access to delete the other user's order!")
  }
    await Order.findByIdAndRemove(req.params.id);
    res.status(200).json({message:`Order is deleted for ${req.params.id}`});
});

module.exports= { 
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
   };