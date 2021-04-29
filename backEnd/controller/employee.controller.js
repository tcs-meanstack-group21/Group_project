
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
