const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.route("/")
.get(function(req, res) {
  res.render("home");
});


const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App is running on port " + port);
});
