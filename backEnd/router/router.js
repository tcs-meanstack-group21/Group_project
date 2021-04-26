let express = require("express");
let router = express.Router();  //router reference. 
let employeeController = require("../controller/employee.controller");

//mapping sub path with http methods.


router.get("/empSignIn",employeeController.empSignIn)



module.exports=router;