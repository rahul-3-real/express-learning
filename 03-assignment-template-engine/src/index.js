const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

// Template Engine
app.set("views", "views");
app.set("view engine", "ejs");

// Controllers
const users = [];

const indexController = (req, res) => {
  res.render("index.ejs", { users });
};

const addUserController = (req, res) => {
  const enteredUser = req.body.name;
  users.push(enteredUser);
  res.redirect("/");
};

// Routes
app.get("/", indexController);
app.post("/add-user", addUserController);

// Server
app.listen(3001, () => {
  console.log(`Server running on :: http://localhost:3001`);
});
