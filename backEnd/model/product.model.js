const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id: Number, //SKU number
    name: String,
    price: Number,
    quantity: Number
});

const ProductModel = mongoose.model("Product", ProductSchema, "products");

module.exports = ProductModel;

// ProductModel.create({_id: 1000, name: "Test Product", price: 200, quantity: 50}, (err, res) => {
//     console.log(err + res)
// })