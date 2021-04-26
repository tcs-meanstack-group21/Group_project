const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    _id: Number,
    password : {type : String, required : true},
    lastLogTime : {type : Date}
});

const EmployeeModel = mongoose.model("", EmployeeSchema, "employee");

module.exports = EmployeeModel;