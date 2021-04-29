
const employeeModel = require("../model/employee.model")

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

module.exports = {empSignIn, empSignUp}
