const path = require("path");
const express = require("express");


const rootDir = require("../util/pathhelper");

const router = express.Router();

router.get("/users", (req, res, next) => {
  console.log("Inside users.js::/users");
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

router.get("/", (req, res, next) => {
  console.log("Inside index.js::/");
  res.sendFile(path.join(rootDir, "views", "index.html"));
});


module.exports = router;
