const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    hospitalname: {
        type: String,
        required: true
      },
      major: {
        type: String,
        required: true
      },
    licensenum: {
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
    }//의사를 위한
});
module.exports = User = mongoose.model("users", UserSchema);