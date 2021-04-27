const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    _id: String, // only one admin with userId "admin"
    pass: String // password
});

const AdminModel = mongoose.model("Admin", AdminSchema, "admin");

module.exports = AdminModel;