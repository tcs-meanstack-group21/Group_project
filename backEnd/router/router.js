const express = require("express");
const router = express.Router();  //router reference. 
const employeeController = require("../controller/employee.controller");

//mapping sub path with http methods.


router.get("/empSignIn",employeeController.empSignIn)
router.post("/empSignUp", employeeController.empSignUp)
// router.put("/empEdit", employeeController.updateEmpPass);

module.exports=router;