const path = require("path");
const express = require("express");


const rootDir = require("./util/pathhelper");
const homeRoutes = require("./routes/index");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

app.use("/", homeRoutes);

app.listen(3000);
