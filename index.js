const express = require("express");
const port = 8000;
const path = require("path");

const app = express();

app.use(express.static("./assets"));

app.use("/", require("./routes/index"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log("Error!!!");
  }
  console.log(`Connected to ${port}`);
});
