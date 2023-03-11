const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title:{
        type:String,
        required: [true, "Title can't be null"]
    },
    desc:{
        type:String,
        required: [true, "Description can't be null"]
    },
    price:{
        type:Number,
        required: [true, "Price can't be null"]
    },
    stock:{
        type:Number,
        required: [true, "Stock can't be null"]
    },
    category_id: {  // reference to Category model
        type: mongoose.Schema.Types.ObjectId, 
        required:true,
        ref: 'Category'
     },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Product", productSchema);