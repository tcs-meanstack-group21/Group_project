const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    _id: Number,
    customer: Schema.Types.ObjectId,
    cart: { type: Map, of: Number },
    dateOrdered: { type: Date, default: Date.now() },
    dateDelivered: Date,
    cancellationReason: { type: String, default: "" }
});

const OrderModel = mongoose.model("Order", OrderSchema, "orders");

module.exports = OrderModel;