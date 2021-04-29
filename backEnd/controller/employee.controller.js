
const employeeModel = require("../model/employee.model");
const EmployeeModel = require("../model/employee.model.js");
let empSignIn = (req,res) =>{
    const eid = eval(req.body.user);
    const pass = req.body.pass;
    employeeModel.findOne({_id:eid,password:pass} , (err,data) => {

        if(!err){
            console.log(eid+","+pass)
            res.send(data);
        }else{
            res.send(err.message)
        }
    })
}

let empSignUp = (req,res) =>{
    const eid = eval(req.body.user);
    const pass = req.body.pass;
const employee = new employeeModel({
    _id: eid,
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

    employee.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Record didn't store ");
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

module.exports = {empSignIn,empSignUp,addEmployeeInfo,deleteEmployeeById}
