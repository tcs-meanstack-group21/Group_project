
const employeeModel = require("../model/employee.model")

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

// let updateEmpPass = (req, res) => {
//     let employee = req.body.uid;
//     let currentP = req.body.cpass;
//     let newP = req.body.npass;
//     console.log(employee);
//     console.log(newP);
//     console.log(currentP);

//     employeeModel.updateOne({_id: employee, password: currentP}, {$set:{password: newP}},(error,data) => {
//         if(!error){
//             if(data.nModified>0){
//                     res.send("Password has successfully been updated.")
//             }else {
//                     res.send("Unable to update password. Please confirm that your current creditials are correct.");
//                     console.log(`no record modified`)
//             }
//         }else {
//             res.send("Error generated "+error);
//             console.log(`Could not find employee to update`)
//         }
//     })
// }

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

module.exports = {empSignIn, empSignUp}
