const express = require("express");
const router = express.Router();  //router reference. 
const OrderController = require("../controller/order.controller");

//mapping sub path with http methods.

router.put("/statusUpdate", OrderController.changeOrderStatus)



module.exports=router;