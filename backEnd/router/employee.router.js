const express = require("express");
const router = express.Router();  //router reference. 
const EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http methods. 
router.post("/addEmployeeInfo",EmployeeController.addEmployeeInfo);
router.delete("/deleteEmployeeById/:pid",EmployeeController.deleteEmployeeById);
router.get("/empSignIn", EmployeeController.empSignIn)
router.put("/empEdit", EmployeeController.updateEmpPass);
router.post("/getid", EmployeeController.getID)

module.exports=router;