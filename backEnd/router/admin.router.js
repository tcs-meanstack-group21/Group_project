const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.controller")

router.post("/adminSignIn", adminController.adminSignIn)

module.exports = router;