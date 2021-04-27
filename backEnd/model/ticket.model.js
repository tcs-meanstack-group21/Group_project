const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    body: String, //reasons for raising ticket
    customer: Number,
    status: { type: String, default: "open" },
    dateOpened: { type: Date, default: Date.now() },
    dateClosed: { type: Date, default: null }
});

const TicketModel = mongoose.model("Ticket", TicketSchema, "tickets");

module.exports = TicketModel;

// TicketModel.create({
//     body: "Test body",
//     customer: 1,
//     dateClosed: null
// }, (err, data) => console.log(data));