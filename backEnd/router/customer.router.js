const express = require("express");
const router = express.Router();
const CustomerController = require("../controller/customer.controller");

router.get("/:uid/getCart", CustomerController.getCart)
router.put("/:uid/addProductToCart", CustomerController.addProductToCart)
router.delete("/:uid/removeProductFromCart", CustomerController.removeProductFromCart)

module.exports = router;