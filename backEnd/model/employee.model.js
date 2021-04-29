const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    _id: Number,
    password :  String,
    lastLogTime :  Date,
    UserEmail: String
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema, "employees");

module.exports = EmployeeModel;