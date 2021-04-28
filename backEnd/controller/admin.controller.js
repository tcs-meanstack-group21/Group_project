const AdminModel = require("../model/admin.model")

let adminSignIn = (req,res) =>{
    const id = req.body.id;
    const pass = req.body.pass;
    AdminModel.findOne({_id:id,pass:pass} , (err,data) => {
        if(!err){
            console.log(data)
            res.json(data);
        }else{
            res.send(err.message)
        }
    })
}

module.exports = {adminSignIn}