let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let AddEmployeeSchema = mongoose.Schema({
    
    
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

let AddEmployeeModel = mongoose.model("",AddEmployeeSchema,"employee");

module.exports = AddEmployeeModel