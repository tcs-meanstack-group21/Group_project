const ProductModel = require("../model/product.model.js");

//function to add product
let addProduct = (req,res)=> {
    let product = new ProductModel({
        _id:req.body.pid,
        name:req.body.pname,
        price:req.body.price,
        quantity:req.body.quantity
    });
    product.save((err,result)=> {
        if(!err){
            res.send("Added Product Successfully!")
        }else {
            res.send("Unable to Add Product!");
        }
    })

}

//function to delete product by name
let deleteProductByName= (req,res)=> {
    let pname = req.body.pname;
    ProductModel.deleteOne({name:pname},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Deleted Product Successfully!")
                }else {
                    res.send("Unable to Delete Product!");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}


//function to update product price
let updateProductPrice= (req,res)=> {
    let pid = req.body.pid;
    let updatedPrice = req.body.price;
    ProductModel.updateOne({_id:pid},{$set:{price:updatedPrice}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Updated Product Price Succesfully!")
            }else {
                    res.send("Unable to Update Product Price!");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}

//function to update product quantity
let updateProductQuantity= (req,res)=> {
    let pid = req.body.pid;
    let updatedQuantity = req.body.quantity;
    ProductModel.updateOne({_id:pid},{$set:{quantity:updatedQuantity}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Updated Product Quantity Succesfully!")
            }else {
                    res.send("Unable to Update Product Quantity!");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}

//function to retrieve all products
let retrieveProducts = (req,res)=>{
    ProductModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

module.exports = {addProduct, deleteProductByName, updateProductPrice, updateProductQuantity, retrieveProducts}
