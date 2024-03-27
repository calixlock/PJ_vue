const express = require("express");
const path = require("path");
const app = express();
const _path = path.join(__dirname, "./dist");
app.use("/", express.static(_path));
app.listen(12010, () => {
  console.log("server: start | port: 12010");
  console.log("http://localhost:12010");
});
