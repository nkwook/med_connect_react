const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const passport = require("passport");
const users = require("./routes/api/users");
const patients=require("./routes/api/patients")
const reports=require("./routes/api/reports")
const comments=require("./routes/api/comments")

const NOKs = require("./routes/api/NOKs");
const mongo = require('mongoose');
const assert = require('assert');
var url = 'mongodb://localhost:27017/test'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    res.send('Hello world');
});
app.get('/', (req, res) => {
    res.send('Hello world to get');
});
// mongo.connect(url, function(err, db) {
//     assert.equal(null. err);
//     db.collection('login-info').insertOne(item, function(err, result) {
//         assert.equal(null, error);
//         console.log('Item inserted');
//         db.close();
//     });


// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/patients", patients);
app.use("/api/reports", reports);
app.use("/api/comments", comments);
app.use("/api/NOKs", NOKs);

// app.use("/api/NOKs", NOKs);
// app.post("/api/users/register", function(req, res, next) {
//         mongo.connect(url, function(err, db) {
//         assert.equal(null. err);
//         db.collection('login-info').insertOne(item, function(err, result) {
//             assert.equal(null, error);
//             console.log('Item inserted');
//             db.close();
//         });
//     });
// });
app.listen(port, () => console.log(`server run and Listening on port ${port}`));