const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customer: Schema.Types.ObjectId,
    cart: { type: Map, of: Number, required: true },
    dateOrdered: { type: Date, default: Date.now() },
    dateDelivered: { type: Date, default: null },
    orderStatus : { type: String, default: "Order label created."},
    cancellationReason: { type: String, default: "" }
});

const OrderModel = mongoose.model("Order", OrderSchema, "orders");

module.exports = OrderModel;