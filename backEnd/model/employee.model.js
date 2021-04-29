const mongoose = require("mongoose");
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    _id: Number,
    password :  String,
    lastLogTime :  Date
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema, "employees");
const AddEmployeeSchema = mongoose.Schema({
    
    
    firstname: {
        type: String, // String type
        required: true,
    },

    lastname: {
        type: String, // String type
        required: true,
    },

    emailid: {
        type: String, // String type
        required: true,
    },

    password: {
        type: String, // Number type
        default: "welcome123",
      },
})

const AddEmployeeModel = mongoose.model("",AddEmployeeSchema,"employee");
module.exports = EmployeeModel,AddEmployeeModel;