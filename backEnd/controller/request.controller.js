const ProductModel = require("../model/product.model")
const RequestModel = require("../model/request.model")

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

module.exports = {sendProductRequest}