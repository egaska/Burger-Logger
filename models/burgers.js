// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
        // console.log("Checking all in burger.js")
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
        cb(res);
    });
   
},
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(result) {
        cb(result);
    });
}
};

// Export the database functions for the controller.
module.exports = burgers;
