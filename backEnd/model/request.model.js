const mongoose = require("mongoose");
const ProductModel = require("../model/product.model");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    // Search through ProductSchema model, find requested _id, name, price and current quantity
    // Store requested updated quantity for product
    
});

const RequestModel = mongoose.model("", RequestSchema, "Requests");

module.exports = RequestModel;