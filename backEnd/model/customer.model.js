const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
        
        firstName: String,
        lastName: String,
        birthDate: Date,
        phone: Number,
        email: String,
        password: String,
        street: String,
        aptUnit: String,
        city: String,
        state: String,
        postalCode: Number,
        funds: Number,
    lockedStatus: { type: Boolean, default: false },
    ticket: { type: Schema.Types.ObjectId, default: null }, //reference ID
    orders: { type: [Number], default: [] },                //reference IDs
    cart: { type: Map, of: Number, default: {} }
});

const CustomerModel = mongoose.model("Customer", CustomerSchema, "customers");

module.exports = CustomerModel;

// CustomerModel.create({
//     _id: 1,        //user ID must be unique identifier
//     password: "password",
//     profile: {
//         firstName: "Matthew",
//         lastName: "Barnes",
//         birthDate: new Date("June 9 1999"),
//         phone: 5129247719,
//         email: "matthew.earl.barnes@gmail.com",
//         address: {
//             street: "1000 Minor Ave",
//             aptUnit: "Apt 1505",
//             city: "Seattle",
//             state: "WA",
//             postalCode: 98104
//         }
//     },
//     funds: 12000,
//     cart: { "1000": 5 }
// }, (err, res) => console.log(err + res))