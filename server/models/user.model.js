const sql = require("../connection");
const bcrypt = require('bcrypt')

// constructor
const User = function (user) {
  this.username = user.username;
  this.password = user.password;
  this.fullname = user.fullname;
  this.role = user.role;
  this.status = user.status;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", {
      id: res.insertId,
      ...newUser
    });
    result(null, {
      id: res.insertId,
      ...newUser
    });
    return newUser;
  });
};

User.login = (username, password, result) => {
  sql.query(
    "SELECT * FROM user WHERE username = ?",
    [username],
    (err, results, fields) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (results.length > 0) {
        if (bcrypt.compareSync(password, results[0].password)) {
          console.log("found user: ", results[0]);
          result(null, results[0]);
          // Passwords match
        } else {
          result({
            kind: "not_found"
          },
          null
        );
        }
      } else {
        result({
          kind: "not_found"
        },
        null
      );
      }
    }
  );
};

User.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("user: ", res);
    result(null, res);
  });
};

module.exports = User;
