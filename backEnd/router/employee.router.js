const express = require("express");
const router = express.Router();  //router reference. 
const EmployeeController = require("../controller/addEmployee.controller.js");

//mapping sub path with http methods. 
router.post("/addEmployeeInfo",EmployeeController.addEmployeeInfo);
router.delete("/deleteEmployeeById/:pid",EmployeeController.deleteEmployeeById);

module.exports=router;