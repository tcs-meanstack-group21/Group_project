const express = require("express");
const router = express.Router();
const CustomerController = require("../controller/customer.controller");

router.get("/:uid/getCart", CustomerController.getCart)
router.put("/:uid/addProductToCart", CustomerController.addProductToCart)
router.delete("/:uid/removeProductFromCart/:pid", CustomerController.removeProductFromCart)
router.post("/:uid/checkout", CustomerController.checkout)
router.post("/getFunds", CustomerController.getFunds)
router.put("/addFunds", CustomerController.addFunds)
router.post("/custSignIn",CustomerController.custSignIn)
router.post("/custSignUp", CustomerController.custSignUp)
router.put("/updateProf", CustomerController.updateProfile)

module.exports = router;