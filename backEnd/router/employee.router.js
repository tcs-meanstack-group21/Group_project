const express = require("express");
const router = express.Router();  //router reference. 
const EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http methods. 
router.post("/addEmployeeInfo",EmployeeController.addEmployeeInfo);
router.delete("/deleteEmployeeById/:pid",EmployeeController.deleteEmployeeById);
router.post("/empSignIn", EmployeeController.empSignIn)

module.exports=router;