const ProductModel = require("../model/product.model")
const CustomerModel = require("../model/customer.model")

// in Angular, use pid for product._id and uid for user._id
const getCart = (req, res) => {
    const userId = req.params.uid;
    CustomerModel.find({ _id: userId }, (err, data) => {
        if (!err) {
            let user = data[0];
            let cartKeys = [...user.cart.keys()];
            ProductModel.find({ '_id': {$in: cartKeys} }, (err2, result) => {
                if (!err2) {
                    res.json(result);
                }
                else res.send("Error" + err2);
            })
        }
    })
}

const addProductToCart = (req, res) => {
    const productId = req.body.pid.toString();
    const userId = req.params.uid;
    const addQuantity = parseInt(req.body.quantity);
    CustomerModel.find({ _id: userId }, (err, data) => {
        if (!err) {
            let user = data[0];
            if (user) {
                let oldQuantity = user.cart.get(productId);
                if (oldQuantity == undefined) oldQuantity = 0;
                console.log(oldQuantity)
                user.cart.set(productId, oldQuantity + addQuantity);
                CustomerModel.updateOne({_id: userId}, {cart: user.cart}, (err2, result) => {
                    if(err2) result.send("Error generated: " + err2);
                    else res.send("Successfully added item");
                })
                console.log(user.cart);
            } else {
                res.send("Error: no user found");
            }
        } else {
            res.send("Error generated: " + err);
        }
    })
}

const removeProductFromCart = (req, res) => {
    const productId = req.body.pid.toString();
    const userId = req.params.uid;
    CustomerModel.find({ _id: userId }, (err, data) => {
        if (!err) {
            let user = data[0];
            if (user) {
                user.cart.delete(productId);
                CustomerModel.updateOne({_id: userId}, {cart: user.cart}, (err2, result) => {
                    if(err2) result.send("Error generated: " + err2);
                    else res.send("Successfully deleted item");
                })
            }
        } else res.send("Error generated: " + err);
    })
}

module.exports = { getCart, addProductToCart, removeProductFromCart }