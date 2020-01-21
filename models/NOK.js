const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
// Create Schema
const UserSchema = new Schema({
    phonenum: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    patientid: {
        type: String,
        required: true
    }//보호자를 위한
});
module.exports = NOK = mongoose.model("NOKs", UserSchema);