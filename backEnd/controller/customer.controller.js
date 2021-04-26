const ProductModel = require("../model/product.model")
const CustomerModel = require("../model/customer.model")

// in Angular, use pid for product._id and uid for user._id
const getCart = (req, res) => {
    const userId = req.params.uid;
    CustomerModel.find({ _id: userId }, (err, data) => {
        if (!err) {
            let user = data[0];
            let cartKeys = [...user.cart.keys()];
            for (let i of cartKeys) {
                i = eval(i);
            }
            ProductModel.find({ _id: { "$in": cartKeys } }, (err2, result) => {
                if (!err2) res.json(result);
                else res.send("Error" + err2);
            })
        }
    })
}

const addProductToCart = (req, res) => {
    const productId = req.body.pid.toString();
    const userId = req.body.uid;
    const addQuantity = req.body.quantity;
    CustomerModel.find({ _id: userId }, (err, data) => {
        if (!err) {
            let user = data[0];
            if (user) {
                const oldQuantity = user.cart.get(productId) || 0;
                user.cart.set(productId, oldQuantity + addQuantity);
                res.send("Successfully added item");
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
    const userId = req.body.uid;
    CustomerModel.find({ _id: userId }, (err, data) => {
        if (!err) {
            let user = data[0];
            if (user) {
                user.cart.delete(productId);
                res.send("Item deleted")
            }
        } else res.send("An error occured")
    })
}

module.exports = { getCart, addProductToCart, removeProductFromCart }