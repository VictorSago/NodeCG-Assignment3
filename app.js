//const path = require("path");
const express = require("express");

const app = express();

//const rootDir = require("./util/pathhelper");
const homeRoutes = require("./routes/index");

app.use("/", homeRoutes);


app.listen(3000);
