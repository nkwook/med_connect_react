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
// Load NOK model
const NOK = require("../../models/NOK");
const Patient = require("../../models/Patient");

var url = 'mongodb://localhost:27017/test'
// @route POST api/noks/register
// @desc Register nok
// @access Public
console.log(180)
router.post("/register", (req, res) => {
    // Form validation
    console.log(200);
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

  NOK.findOne({ id: req.body.id }).then(nok => {
      if (nok) {
        return res.status(400).json({ id: "Id already exists" });
      } else {
        const newNOK = new NOK({
          id: req.body.id,
          password: req.body.password,
          phonenum: req.body.phonenum,
          patientid: req.body.patientid
        });
        
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newNOK.password, salt, (err, hash) => {
            if (err) throw err;
            newNOK.password = hash;
            newNOK
              .save()
              .then(nok => res.json(nok))
              .catch(err => console.log(err));
          });
        });

        // mongo.connect(url, function(err, db) {
        //     assert.equal(null. err);
        //     db.collection('login-info').insertOne(newNOK, function(err, result) {
        //         assert.equal(null, error);
        //         console.log('Item inserted');
        //         db.close();
        //     });
        // });
      }
    });
  });

// @route POST api/noks/login
// @desc Login nok and return JWT token
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
  // Find nok by id
    NOK.findOne({ id }).then(nok => {
      // Check if nok exists
      if (!nok) {
        return res.json({                 
          success: false,
          reason: "Id not found" });
      }
  // Check password
      bcrypt.compare(password, nok.password).then(isMatch => {
        if (isMatch) {
          // NOK matched
          // Create JWT Payload
          const payload = {
            id: nok.id,
            //name: nok.name
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
                reason: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .json({                 
              success: false,
              reason: "Password incorrect" });
        }
      });
    });
  });
// @route POST api/noks/register
// @desc Register nok
// @access Public
console.log(230)
router.post("/addPatient", (req, res) => {
    // Form validation
    console.log(300);

    const id = req.body.NOKid;
    NOK.findOne({ id }).then(nok => {
    if (!nok) {
      return res.status(404).json({ idnotfound: "NOK Id not found" });
    }
    else {
        const newPatient = new Patient({
          name: req.body.name,
          image:req.body.image,
          NOKid: req.body.NOKid,
          relationship: req.body.relationship,
          phonenum: req.body.phonenum,
          age: req.body.age,
          sex: req.body.sex,
          onQueue: req.body.onQueue,
          onTreat: req.body.onTreat
        });
        
        newPatient
        .save()
        .then(patient => res.json(patient))
        .catch(err => console.log(err));

        // mongo.connect(url, function(err, db) {
        //     assert.equal(null. err);
        //     db.collection('login-info').insertOne(newNOK, function(err, result) {
        //         assert.equal(null, error);
        //         console.log('Item inserted');
        //         db.close();
        //     });
        // });
      }
    });
  });
  module.exports = router;