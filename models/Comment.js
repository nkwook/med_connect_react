const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    NOKid:{
        type: String,
        required: true
    },
    comment:{

        type:String,
        default: "밥 잘 챙겨드세요~~"
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = Comment = mongoose.model("comments", UserSchema);