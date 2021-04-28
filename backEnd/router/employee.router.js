let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/addEmployee.controller.js");

//mapping sub path with http methods. 
router.post("/addEmployeeInfo",EmployeeController.addEmployeeInfo);
router.delete("/deleteEmployeeById/:pid",EmployeeController.deleteEmployeeById);

module.exports=router;