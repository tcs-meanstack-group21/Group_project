const express = require("express");
const router = express.Router();
const ProductController = require("../controller/product.controller");

router.post("/addProduct", ProductController.addProduct)
router.put("/updateProductPrice", ProductController.updateProductPrice)
router.put("/updateProductQuantity", ProductController.updateProductQuantity)
router.delete("/deleteProduct", ProductController.deleteProductByName)
router.get("/retrieveProducts", ProductController.retrieveProducts)

module.exports = router;