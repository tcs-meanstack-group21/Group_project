const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id: Number, //SKU number
    name: String,
    price: Number,
    quantity: Number
});

const ProductModel = mongoose.model("", ProductSchema, "Products");

module.exports = ProductModel;