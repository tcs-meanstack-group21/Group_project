const express = require("express");
const router = express.Router();
const CustomerController = require("../controller/customer.controller");

router.get("/:uid/getCart", CustomerController.getCart)
router.put("/:uid/addProductToCart", CustomerController.addProductToCart)
router.delete("/:uid/removeProductFromCart/:pid", CustomerController.removeProductFromCart)
router.post("/:uid/checkout", CustomerController.checkout)
router.get("/getFunds/:uid", CustomerController.getFunds)
router.post("/addFunds", CustomerController.addFunds)
router.get("/custSignIn",CustomerController.custSignIn)
router.post("/custSignUp", CustomerController.custSignUp)

module.exports = router;