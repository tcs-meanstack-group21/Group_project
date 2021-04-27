const mongoose = require("mongoose");
// const ProductModel = require("../model/product.model");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    // Search through ProductSchema model, find requested _id, name, price and current quantity
    // Store requested updated quantity for product
    _id: Number, // Request number
    SKU: Number, // product _id SKU
    name: String,
    price: Number,
    currentQuantity: Number,
    requestQuantity: Number,
    empId: Number // employee _id of employee submitting the request
});


const RequestModel = mongoose.model("request", RequestSchema, "Requests");

module.exports = RequestModel;