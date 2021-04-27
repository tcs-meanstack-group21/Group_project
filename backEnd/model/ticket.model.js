const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    body: String, //reasons for raising ticket
    customer: Number,
    status: { type: String, default: "open" },
    dateOpened: { type: Date, default: Date.now() },
    dateClosed: Date
});

const TicketModel = mongoose.model("Ticket", TicketSchema, "tickets");

module.exports = TicketModel;

// TicketModel.create({body: "TestBody", cus})