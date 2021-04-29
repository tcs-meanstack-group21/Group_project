const mongoose = require("mongoose");
mongoose.Promise = global.Promise; 

const EmployeeSchema = mongoose.Schema({
    
    firstName: {
        type: String, // String type
        required: true,
    },

    lastName: {
        type: String, // String type
        required: true,
    },

    emailId: {
        type: String, // String type
        required: true,
    },

    password: {
        type: String, // Number type
        default: "welcome123",
      },

    lastLogTime: {
        type: Date,
        default: Date.now()
      }

})

const EmployeeModel = mongoose.model("", EmployeeSchema, "employee");
module.exports = EmployeeModel;

//const Schema = mongoose.Schema;
//OLD employee model, added 'lastLogTime' to new employee model below to mirror
// const EmployeeSchema = new Schema({
//     _id: Number,
//     password :  String,
//     lastLogTime :  Date,
//     UserEmail: String
// });
// const EmployeeModel = mongoose.model("Employee", EmployeeSchema, "employees");