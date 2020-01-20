const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const passport = require("passport");
const users = require("./routes/api/users");
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
app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '나동빈',
            'birthday': '960508',
            'gender': '남자',
            'job': '프로그래머'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '이순신',
            'birthday': '961127',
            'gender': '남자',
            'job': '디자이너'
        }//의사, 환자, 보호자 정보로 바꿀 위치
    ]);
});

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