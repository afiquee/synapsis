const User = require("../models/user.model.js")
const middleware = require('../routes/verifyToken')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { config } = require('../config.json');

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  bcrypt.hash(req.body.password, 10, function (err, hash) {
    const user = new User({
      username: req.body.username,
      password: hash,
      fullname: req.body.fullname,
      role: req.body.role,
      status: req.body.status
    });

    // Save Customer in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Customer."
        });
      else {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        res.status(200).send({
          token
        })
      }
    });
  });

  // Create a Customer

};

exports.login = (req, res) => {

  console.log("1")
  // Validate request
  if (!req.body) {
    console.log("2")
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Save Customer in the database
  User.login(req.body.username, req.body.password, (err, user) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(401).send('Invalid Email or Password')
      }
    }

    else {
        console.log("c")
        let payload = {
          subject: user._id
        }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({
          token
        })
    }
  });

  // Create a Customer

};

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(JSON.stringify(data));
  });
};
