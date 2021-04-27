const { response } = require("express");
const employeeModel = require("../model/employee.model")

let empSignIn = (req,res) =>{
    const eid = req.body.eid;
    const pass = req.body.pass;
    employeeModel.findOne({_id:eid,password:pass} , (err,data) => {
        if(!err){
            res.json(data);
        }else{
            res.send(err.message)
        }
    })
}

module.exports = {empSignIn}
