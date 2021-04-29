
const employeeModel = require("../model/employee.model");
const EmployeeModel = require("../model/employee.model.js");
let empSignIn = (req,res) =>{
    const email = eval(req.body.cemail);
    const pass = req.body.pass;
    employeeModel.findOne({UserEmail:email,password:pass} , (err,data) => {
        if(!err){
            res.json(data);
        }else{
            res.send(err.message)
        }
    })
}

let updateEmpPass = (req, res) => {
    let employee = req.body.uid;
    let currentP = req.body.cpass;
    let newP = req.body.npass;
    console.log(employee);
    console.log(newP);
    console.log(currentP);

    EmployeeModel.updateOne({_id: employee, password: currentP}, {$set:{password: newP}},(error,data) => {
        console.log(data)
    
        if(!error){
            if(data.nModified>0){
                    res.send("Password has successfully been updated.")
            }else {
                    res.send("Unable to update password. Please confirm that your current creditials are correct.");
                    console.log(`no record modified`)
            }
        }else {
            res.send("Error generated ===> "+error);
            console.log(`Could not find employee to update`)
        }
    })
}

let empSignUp = (req,res) =>{
    const email = eval(req.body.email);
    const pass = req.body.pass;
    const employee = new employeeModel({
    UserEmail: email,
    password : pass,
});

employee.save((err,result)=> {
    if(!err){
        res.send("Record stored successfully ")
        //res.json({"msg":"Record stored successfully"})
    }else {
        res.send("Record didn't store ");
    }
})
}

let addEmployeeInfo = (req,res)=> {
   
    let employee = new EmployeeModel({
        
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        emailid:req.body.emailid,

    });
    console.log(employee);
    employee.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
            console.log("Employee added")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Record didn't store ");
            console.log("Employee not added")
        }
    })

}

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

module.exports = {empSignIn, empSignUp, addEmployeeInfo, deleteEmployeeById, updateEmpPass}
