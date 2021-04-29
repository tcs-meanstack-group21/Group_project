const employeeModel = require("../model/employee.model")

let empSignIn = (req,res) =>{
    const eid = req.body.eid;
    const pass = req.body.pass;
    employeeModel.findOne({_id:eid,password:pass} , (err,data) => {

        if(!err){
            console.log(req)
            res.json(data);
        }else{
            res.json(err.message)
        }
    })
}

let updateEmpPass = (req, res) => {
    let employee = req.body.uid;
    let currentP = req.body.cpass;
    let newP = req.body.npass;

    employeeModel.updateOne({_id: employee, password: currentP}, {$set:{password: newP}},(error,data) => {
        if(!error){
            if(data.nModified>0){
                    res.send("Password has successfully been updated.")
            }else {
                    res.send("Unable to update password. Please confirm that your current creditials are correct.");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
}

module.exports = {empSignIn, updateEmpPass}
