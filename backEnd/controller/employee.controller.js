
const EmployeeModel = require("../model/employee.model.js");
let empSignIn = (req,res) =>{
    console.log(req)
    const email = req.body.email;
    const pass = req.body.pass;
    EmployeeModel.findOne({UserEmail:email, password:pass} , (err,data) => {
        if(!err){
            res.json(data);
        }else{
            res.send(err.message)
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

module.exports = {empSignIn,addEmployeeInfo,deleteEmployeeById}
