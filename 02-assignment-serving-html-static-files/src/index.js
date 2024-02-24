const express = require("express");
const path = require("path");
const rootDir = require("./utils/path");

const app = express();

// Static File
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "about.html"));
});

// Server
app.listen(3001, () => {
  console.log(`Server running on :: http://localhost:3001`);
});
