const EmployeeModel = require("../model/employee.model");

// Employee Sign In 
let empSignIn = (req,res) =>{
    const email = req.body.email;
    const pass = req.body.pass;
    EmployeeModel.findOne({emailId: email, password:pass} , (err,data) => {
        if(!err){
            // res.redirect('/empDash')
             res.json(data);
        }else{
            res.send(err.message)
        }
    })
}


// Employee Update Password
let updateEmpPass = (req, res) => {
    let employee = req.body.uid;
    let currentP = req.body.cpass;
    let newP = req.body.npass;
    EmployeeModel.updateOne({_id: employee, password: currentP}, {$set:{password: newP}},(error,data) => {
        
        if(!error){
            if(data.nModified>0){
                    res.send(`Password has successfully been updated for employee ID# ${employee}`)
            }else {
                    res.send("Unable to update password. Please confirm that your current creditials are correct.");
            }
        }else {
            res.send("Error generated ===> "+error);
            console.log(`Could not find employee to update`)
        }
    })
}

// Admin Add Employee
let addEmployeeInfo = (req,res)=> {
    let employee = new EmployeeModel({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        emailId: req.body.emailid,
    });
    console.log("Employee being added: ", employee);
    employee.save((err,result)=> {
        if(!err){
            res.send("Employee has successfully been created. Password is default.\nPlease update password upon initial login.")
            console.log("Employee added")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Employee not created. Please ensure all fields are completed and try again.");
            console.log("Employee not added")
        }
    })

}

// Admin Delete Employee
const deleteEmployeeById= (req,res)=> {
    let pid = req.params.pid;
    EmployeeModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Record deleted successfully")
                }else {
                    res.send("Record not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })
}


module.exports = {empSignIn,  addEmployeeInfo, deleteEmployeeById, updateEmpPass}
