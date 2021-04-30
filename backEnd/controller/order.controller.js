const orderModel = require("../model/order.model")

let changeOrderStatus = (req,res) =>{
    const oid = req.body.oid;
    const status = req.body.status;
    orderModel.updateOne({_id : oid}, {$set: {orderStatus : status}} , (err,result) =>{
        if(!err){
            if(result.nModified > 0){
                res.send("Order status updated");
                console.log("order status changed")
            }else{
                res.send("No Record Found / Same Amount")
                console.log("order status not changed")
            }
        }else{
            res.send(err.message)
        }
    })
}

let orderStatus = (req,res) =>{
    const cust = req.body.id
    orderModel.find( {customer:cust}, (error, result) => {
        if (!error){
            res.json(result)
        }
    })
}
let orderDelete = (req,res) =>{
    let oid = req.body.id;
    orderModel.deleteOne({_id:oid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Record deleted successfully")
                }else {
                    res.send("Record not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })
}

let retrieveOrders = (req, res) => {
    orderModel.find( {}, (error, result) => {
        if (!error){
            res.json(result)
        }
    })
}

module.exports = {changeOrderStatus, retrieveOrders, orderStatus, orderDelete}