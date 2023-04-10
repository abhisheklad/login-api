const newrelic = require("newrelic");
const iast = require("/Users/abhisheklad/Documents/nodejs/newrelic");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database 🍃");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

let PORT = 8081;

require("./app/routes/app.routes.js")(app);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});