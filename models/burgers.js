// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
        console.log("Checking all in burger.js")
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  function(id, cb) {
    var condition = "id=" + id;
    orm.update(
      "burgers",
      {
        devoured: true,
      },
      condition,
      cb
    );
  }
};

// Export the database functions for the controller.
module.exports = burgers;
