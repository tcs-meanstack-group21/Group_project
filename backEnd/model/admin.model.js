const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    _id: String, // only one admin with userId "admin"
    pass: String // password
});

const AdminModel = mongoose.model("Admin", AdminSchema, "admin");

// try{
    AdminModel.create({_id:"admin", pass:"admin123"},(err,data) => {
        if(!err){
            console.log(data)
        }else{
           console.log("Admin user exists!")
        }
    })

module.exports = AdminModel;