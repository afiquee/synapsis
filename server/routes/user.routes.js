const authorize = require('../helpers/authorize')
module.exports = app => {
    const user = require("../controllers/user.controller");
 
  
    // Create a new Customer
    app.post("/user/register",  user.create);

    app.post("/user/login", user.login);

    app.get("/user/all", user.findAll);
  
    // Retrieve all Customers
   // app.get("/customers", customers.findAll);
  
    // Retrieve a single Customer with customerId
    //app.get("/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    //app.put("/customers/:customerId", customers.update);
  
    // Delete a Customer with customerId
    //app.delete("/customers/:customerId", customers.delete);
  
    // Create a new Customer
    //app.delete("/customers", customers.deleteAll);
  };