const express = require("express");
const router = express.Router();  //router reference. 
const OrderController = require("../controller/order.controller");

//mapping sub path with http methods.

router.put("/statusUpdate", OrderController.changeOrderStatus)
router.get("/retrieveOrders", OrderController.retrieveOrders)


module.exports=router;