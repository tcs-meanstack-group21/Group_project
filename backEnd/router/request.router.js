const express = require("express");
const router = express.Router();
const RequestController = require("../controller/request.controller");

router.post("/sendRequest", RequestController.sendProductRequest)   // Storing product request
router.get("/retrieveRequests", RequestController.retrieveRequests) // Retrieving pending requests
// router.put("/updateProductPrice", ProductController.updateProductPrice)
// router.put("/updateProductQuantity", ProductController.updateProductQuantity)
// router.delete("/deleteProduct/:pname", ProductController.deleteProductByName)
// router.get("/retrieveProducts", ProductController.retrieveProducts)

module.exports = router;