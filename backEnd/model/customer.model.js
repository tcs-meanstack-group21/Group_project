const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    _id: Number,        //user ID must be unique identifier
    password: String,
    profile: {
        firstName: String,
        lastName: String,
        birthDate: Date,
        phone: Number,
        email: String,
        address: {
            street: String,
            aptUnit: String,
            city: String,
            state: String,
            postalCode: Number
        }
    },
    funds: Number,
    lockedStatus: { type: Boolean, default: false },
    ticket: { type: Schema.Types.ObjectId, default: null }, //reference ID
    orders: { type: [Number], default: [] },                //reference IDs
    cart: { type: Map, of: Number, default: {} }
});

const CustomerModel = mongoose.model("", CustomerSchema, "users");

module.exports = CustomerModel;