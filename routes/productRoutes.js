const express = require("express");
const router = express.Router();

const { getProducts, 
        getProductsByCategory,
        createProduct,
        getProduct,
        updateProduct,
        deleteProduct} = require("../controllers/ProductController");


router.route("/").get( getProducts).post( createProduct );

router.route("/:id").get(getProduct ).put( updateProduct).delete( deleteProduct)

router.route("/category/:category_id").get(getProductsByCategory )


 module.exports = router;