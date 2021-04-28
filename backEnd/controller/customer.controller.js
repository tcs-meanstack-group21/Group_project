const ProductModel = require("../model/product.model")
const CustomerModel = require("../model/customer.model")
const OrderModel = require("../model/order.model")

// in Angular, use pid for product._id and uid for user._id
const getCart = (req, res) => {
    const userId = req.params.uid;
    CustomerModel.find({ _id: userId }, (err, data) => {
        if (!err) {
            let user = data[0];
            let cartKeys = [...user.cart.keys()];
            ProductModel.find({ '_id': { $in: cartKeys } }, (err2, result) => {
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
                user.cart.set(productId, oldQuantity + addQuantity);
                CustomerModel.updateOne({ _id: userId }, { cart: user.cart }, (err2, result) => {
                    if (err2) result.send("Error generated: " + err2);
                    else res.send("Successfully added item");
                })
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
                CustomerModel.updateOne({ _id: userId }, { cart: user.cart }, (err2, result) => {
                    if (err2) result.send("Error generated: " + err2);
                    else res.send("Successfully deleted item");
                })
            }
        } else res.send("Error generated: " + err);
    })
}

//I will redo this function to make it better, just trying to get it to work for now
const checkout = (req, res) => {
    const userId = req.params.uid;
    CustomerModel.findById(userId, (err1, user) => {
        if (!err1 && user) {
            let cartKeys = [...user.cart.keys()];
            ProductModel.find({ '_id': { $in: cartKeys } }, (err2, products) => {
                if (!err2) {
                    let cartCost = 0;
                    for (product of products) {
                        cartCost += parseFloat(product.price) * parseFloat(user.cart.get(product._id.toString())); //product price times quantity
                    }
                    if (cartCost > user.funds) {
                        res.send("Insufficient funds");
                        return;
                    }
                    OrderModel.create({ _id: user._id, customer: user._id, cart: user.cart }, (err3, order) => {
                        if (err3) {
                            res.send("Could not create order: " + err3);
                            return;
                        }
                        CustomerModel.findByIdAndUpdate(userId, { order: order._id, funds: user.funds - cartCost, cart: {} }, { useFindAndModify: false }, (err4, cust) => {
                            if (!err4) {
                                res.send("Order successfully placed");
                            } else {
                                res.send("Could not update user: " + err4);
                            }
                        })
                    })
                }
                else res.send("Error" + err2);
            })
        } else res.send("Error: ")
    })
}

const addFunds = (req,res) =>{
    const cid = req.body.uid;
    const cfunds = parseFloat(req.body.funds);

    CustomerModel.updateOne({_id : cid}, {$set: {funds : cfunds}}, (err,result) =>{
        if(!err){
            if(result.nModified>0){
                    res.send("Funds updated succesfully")
            }else {
                    res.send("User is not available");
            }
        }else {
            res.send("Error generated "+err.message);
        }
    })
}

const getFunds = (req,res) =>{
    const cid = req.params.uid;
    CustomerModel.find({_id:cid},(err,data)=> {
        if(!err){
            res.json(data); 
        }else{
            res.send("No user found")
        }
    })
}


module.exports = { getCart, addProductToCart, removeProductFromCart, checkout , addFunds, getFunds}