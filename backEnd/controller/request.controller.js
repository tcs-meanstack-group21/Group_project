const ProductModel = require("../model/product.model")
const RequestModel = require("../model/request.model")

// Employee Sending Request for Product Quantity Update
const sendProductRequest = (req, res) => {
    productId = req.body.pid.toString();
    updateQuanity = req.body.qupdate;
    employee = req.body.uid;

    // Validate product SKU
    ProductModel.find({ _id: productId }, (err, data) => {
        if (!err) {
            // If product ID is found
            if ( data[0] != null ) {

                // requestId = data[0]._id;
                // productName = data[0].name,
                let newRequest = new RequestModel({SKU: productId, name: data[0].name, price: data[0].price, currentQuantity: data[0].quantity, requestQuantity: updateQuanity, empId: employee})
                // let newRequest = new RequestModel({SKU: productId, requestQuantity: updateQuanity, empId: employee})
                newRequest.save( (error, result) => {
                    if (!error) {
                        res.send('Added Product Successfully!')
                        console.log(`Request submitted, awaiting Admin approval.`)
                    } else {
                        res.send('<h2>Error occured when submitting request... Please try again</h2>');
                        console.log(`Error generated.`)
                    }
                })
            } else {
                // Return that product is not found and request could not be submitted.
                res.send('Product ID not found. Please try again.')
            }
        } else {
            res.send(`Product unable to be found!!!!`)
        }
    })
}

// Retrieve Current Pending Employee Requests
let retrieveRequests = (req, res) => {
    RequestModel.find({}, (err,result) => {
        if(!err){
            res.json(result)
        }
    })
}

module.exports = {sendProductRequest, retrieveRequests}