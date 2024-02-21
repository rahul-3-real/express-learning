const express = require("express");

const app = express();

// * Middleware
// const firstMiddleware = (req, res, next) => {
//   console.log(`Log from 1st Middleware`);
//   next();
// };
// const secondMiddleware = (req, res) => {
//   console.log(`Log from 2nd Middleware`);
//   res.send("Completed");
// };
// app.use(firstMiddleware, secondMiddleware);

// * Routes
app.use("/users", (req, res) => {
  res.send("/users handles /users routes");
});
app.use("/", (req, res) => {
  res.send("/ handles / routes");
});

app.listen(8000, () => {
  console.log(`Server running on Port :: http://localhost:8000/`);
});
