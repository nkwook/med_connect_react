const express = require("express");
const router = express.Router();
const mongo = require('mongoose');
const assert = require('assert');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

var url = 'mongodb://localhost:27017/test'
// @route POST api/users/register
// @desc Register user
// @access Public
console.log(18)
router.post("/register", (req, res) => {
    // Form validation
    console.log(20);
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

  User.findOne({ id: req.body.id }).then(user => {
      if (user) {
        return res.status(400).json({ id: "Id already exists" });
      } else {
        const newUser = new User({
          id: req.body.id,
          password: req.body.password,
          hospitalname: req.body.hospitalname,
          major: req.body.major,
          licensenum: req.body.licensenum
        });
        
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });

        // mongo.connect(url, function(err, db) {
        //     assert.equal(null. err);
        //     db.collection('login-info').insertOne(newUser, function(err, result) {
        //         assert.equal(null, error);
        //         console.log('Item inserted');
        //         db.close();
        //     });
        // });
      }
    });
  });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const id = req.body.id;
    const password = req.body.password;
  // Find user by id
    User.findOne({ id }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ idnotfound: "Id not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            //name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  module.exports = router;