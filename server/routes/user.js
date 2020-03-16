const express = require('express')
const router = express.Router()
const mysql = require('mysql');
const connection = require('../connection')



router.get('/',(req,res) =>{
    res.send('Hello from api')
})

router.post('/register', (req,res) => {
    let userData = req.body;

    var sql = "INSERT INTO user (username, password, fullname, role,) VALUES (, 'Highway 37')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  
})

module.exports = router