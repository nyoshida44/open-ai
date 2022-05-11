const express = require("express");
const app = express();
const PORT = 8080; 

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});