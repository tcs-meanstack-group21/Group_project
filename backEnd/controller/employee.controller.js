const { response } = require("express");
const employeeModel = require("../model/employee.model")
const ProductModel = require("../model/product.model")
const RequestModel = require("../model/request.model")

let empSignIn = (req,res) =>{
    const eid = req.body.eid;
    const pass = req.body.pass;
    employeeModel.findOne({_id:eid,password:pass} , (err,data) => {
        if(!err){
            console.log(req)
            res.json(data);
        }else{
            res.send(err.message)
        }
    })
}

// Employee Sending Request for Product Quantity Update
const sendProductRequest = (req, res) => {
    const productId = req.body.pid.toString();
    const updateQuanity = req.body.qupdate;
    const employee = req.params.uid;
    // Validate product SKU
    ProductModel.find({ _id: productId }, (err, data) => {
        // Add to request model db
        if (!err) {
            let newRequest = new RequestModel({SKU: data._id, name: data.name, price: data.price, currentQuantity: data.quantity, requestQuantity: updateQuanity, empId: employee})
            
            newRequest.save( (result, error) => {
                if (!error) {
                    res.send("Awaiting Admin Approval for Request.");
                    console.log(result);
                    console.log("Request has been submitted, awaiting Admin approval.\n");
                } else {
                    res.send("Error generated: ", error);
                    console.log(error);
                }
            })
        // Return that product is not found and request could not be submitted.
        } else res.send("Error generated: " + err);
    })
}

module.exports = {empSignIn, sendProductRequest}
