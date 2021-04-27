const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    _id: Number,
    customer: Number,
    cart: { type: Map, of: Number, required: true },
    status: { type: String, default: "in progress" }, //in progress, shipped, out for delivery, delivered
    dateOrdered: { type: Date, default: Date.now() },
    dateDelivered: { type: Date, default: null },
    cancellationReason: { type: String, default: "" }
});

const OrderModel = mongoose.model("Order", OrderSchema, "orders");

module.exports = OrderModel;