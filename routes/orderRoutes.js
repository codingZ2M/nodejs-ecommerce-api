const express = require("express");
const router = express.Router();

const validateToken = require("../middleware/ValidateTokenHandler");

const { getOrders, 
        getOrder,
        createOrder,
        updateOrder,
        deleteOrder} = require("../controllers/OrderController");


// Validate all requests using custom middleware 'validateToken'
router.use(validateToken);

router.route("/").post( createOrder );
router.route("/user/").get( getOrders)
router.route("/:id").get(getOrder ).put( updateOrder).delete( deleteOrder)


 module.exports = router;