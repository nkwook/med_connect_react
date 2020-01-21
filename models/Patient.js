const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
      name: {
        type: String,
        required: true
      },
      image:{
          data: Buffer,
        contentType: String
      },
      NOKid: {
        type: String,
        required: true
      },
    relationship: {
        type: String,
        required: true
    },
    phonenum: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    onQueue:{ //대기중인가
        type: Boolean,
        default: false
    },
    onTreat:{ //진료중인가
        type: Boolean,
        default:false
    }
    //환자를 위한
    //json형식으로 문진표 들어올거임
});
module.exports = Patient = mongoose.model("patients", UserSchema);