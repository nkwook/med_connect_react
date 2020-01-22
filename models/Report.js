const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    NOKid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    past: {
        type: String,
        required: true
    },
    social: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    NOKcomment: {
        type: String
    }



})

module.exports = Report = mongoose.model("reports", UserSchema);