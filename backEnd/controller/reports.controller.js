
let OrderModel = require("../model/order.model.js");

let retrieveOrderByDate = (req,res)=> {
    
    let dateOrdered = req.params.dateOrdered;    
    
    OrderModel.find({dateOrdered:new Date(dateOrdered)},(err,data)=> {
        if(!err){
            res.json(data);         // return array 
            //res.json(data[0])     // return only one object 
        }
    })
}
module.exports = {retrieveOrderByDate}