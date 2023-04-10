module.exports = (app) => {
  const App = require("../controllers/app.controller.js");

  app.post("/createusers", App.create);

  app.get("/getallusers", App.findAll);

  app.get("/login", App.findOne);

};