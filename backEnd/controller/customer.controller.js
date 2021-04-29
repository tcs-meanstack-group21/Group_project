const ProductModel = require("../model/product.model")
const CustomerModel = require("../model/customer.model")
const OrderModel = require("../model/order.model")

// in Angular, use pid for product._id and uid for user._id
const getCart = (req, res) => {
    const userId = req.params.uid;
    CustomerModel.find({ _id: userId }, (err, data) => {
        if (!err) {
            let user = data[0];
            if (user) {
                let cartKeys = [...user.cart.keys()];
                ProductModel.find({ '_id': { $in: cartKeys } }, (err2, result) => {
                    if (!err2) {
                        res.json({ "result": result, "cart": user.cart });
                    }
                    else res.send("Error" + err2);
                })
            } else res.send("No user found");
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
    const productId = req.params.pid.toString();
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
                    const newId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
                    OrderModel.create({ _id: newId, customer: user._id, cart: user.cart }, (err3, order) => {
                        if (err3) {
                            res.send("Could not create order: " + err3);
                            return;
                        }
                        const tempCart = user.cart;
                        for (product of products) {
                            ProductModel.findByIdAndUpdate(product._id, {quantity: product.quantity - tempCart.get(product._id.toString())}, { useFindAndModify: false }, (errp, prod) => console.log(errp))
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
    const id = req.body.id;
    const cfunds = parseFloat(req.body.amount);
    let totalAmount;
    CustomerModel.find({_id:id},(err,data)=> {
        if(!err){
            if(data[0].funds ==null){
                totalAmount = cfunds
            }else{
                totalAmount = parseFloat(data[0].funds) + cfunds
            }
            CustomerModel.updateOne({_id : id}, {$set: {funds : totalAmount}}, (err,result) =>{
                if(!err){
                    if(result.nModified>0){
                            res.send("Funds updated succesfully")
                    }else {
                        console.log("y")
                            res.send("User is not available/ Same amount");
                    }
                }else {
                    res.send("Error generated "+err.message);
                }
            })
        }else{
            res.send("No user found")
        }
    })
    
}

const getFunds = (req,res) =>{
    const id = req.body.id;
    CustomerModel.find({_id:id},(err,data)=> {
        if(!err){
            res.json(data[0].funds); 
        }else{
            res.send("No user found")
        }
    })
}
let custSignIn = (req, res) => {
    const cid = eval(req.body.user);
    const pass = req.body.pass;
    CustomerModel.findOne({ _id: cid, password: pass }, (err, data) => {

        if (!err) {
            res.json(data);
        } else {
            res.json(err.message)
        }
    })
}
let custSignUp = (req, res) => {
    const cid = eval(req.body.user);
    const pass = req.body.pass;
    const customer = new CustomerModel({
        _id: cid,
        password: pass,
    });

    customer.save((err, result) => {
        if (!err) {
            console.log(cid + "," + pass)
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        } else {
            res.send("Record didn't store ");
        }
    })
}


module.exports = { getCart, addProductToCart, removeProductFromCart, checkout, addFunds, getFunds, custSignIn, custSignUp }