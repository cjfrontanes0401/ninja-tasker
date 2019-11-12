//packages
const express = require("express");
const bodyParser = require("body-parser");
//starting express
const app = express();

//setting view engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));

let list = ["Code and Gamer", "Slack line tonight"];

// ROUTES
//GET home
app.get("/home", function(req, res) {
  res.render("home.ejs", { list: list });
});

//POST /ninja
app.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  list.push(req.body.taskItem);
  res.render("home.ejs", { list: list });
});

//server listening for request
app.listen(3000, function() {
  console.log("Server is Live!!!");
});
