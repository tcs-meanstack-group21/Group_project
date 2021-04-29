const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    SKU: Number, // product _id SKU
    name: String,
    price: Number,
    currentQuantity: Number,
    requestQuantity: Number,
    empId: Number // employee _id of employee submitting the request
});


const RequestModel = mongoose.model("request", RequestSchema, "Requests");

module.exports = RequestModel;