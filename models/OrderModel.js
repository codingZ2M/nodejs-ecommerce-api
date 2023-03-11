const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User",
    },
    title:{
        type:String,
        required: [true, "Title can't be null"]
    },
    qty:{
        type:Number,
        required: [true, "Quantity can't be null"]
    },
    size:{
        type:Number,
        required: [false]
    },
    color:{
        type:String,
        required: [false]
    },
    date: { 
        type: Date,
        default: Date.now 
    },
    product_id: {  // reference to Product model
        type: mongoose.Schema.Types.ObjectId, 
        required:true,
        ref: 'Product'
     },
    category_id: {  // reference to Category model
        type: mongoose.Schema.Types.ObjectId, 
        required:true,
        ref: 'Category'
     },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Order",orderSchema);