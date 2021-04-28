const { response } = require("express");
const employeeModel = require("../model/employee.model")

let empSignIn = (req,res) =>{
    const eid = req.body.eid;
    const pass = req.body.pass;
    employeeModel.findOne({_id:eid,password:pass} , (err,data) => {

        if(!err){
            if(data != null){
                res.json(data);
            }else{
                res.send("No data found")
            }
            
        }else{
            res.json(err.message)
        }
    })
}

module.exports = {empSignIn}
