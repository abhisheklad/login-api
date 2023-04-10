const App = require("../model/user.model.js");

// Create and Save a new user
exports.create = (req, res) => {
    const user = new App({
      username: req.body.username,
      password: req.body.password
    });
    user
      .save()
      .then((data) => {
        res.send(data);
        console.log(eval('2 + 2'));
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Message.",
        });
      });
  };

  // Retrieve all users from the database.
exports.findAll = (req, res) => {
    //App.collection.drop();
    App.find()
      .then((data) => {
        res.send(data);
        console.log(eval('4 + 2'));
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving.",
        });
      });
  };

  // Find a single message with a password
exports.findOne = (req, res) => {
    const {username, password} = req.body;
    App.findOne({username, password})
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Not found!",
          });
        }
        res.send(data);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Not Found!",
          });
        }
        return res.status(500).send({
          message: "Error retrieving",
        });
      });
  };
