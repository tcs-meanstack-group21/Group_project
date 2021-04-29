const express = require("express");
const router = express.Router();  //router reference. 
const ReportsController = require("../controller/reports.controller.js");

//mapping sub path with http methods. 
router.get("/retrieveOrderByDate/:dateOrdered",ReportsController.retrieveOrderByDate);

module.exports=router;