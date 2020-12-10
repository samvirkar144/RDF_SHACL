var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/about", function(req, res) {
  res.render("about");
});



// handle sign up logic
router.post("/user", function(req, res) {
  if (req.file === undefined) {
    var newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      fullName: req.body.fullName,
      image: "",
      imageId: ""
    });
  }
});

// show login form
router.get("/login", function(req, res) {
 
    res.render("login");
});

router.get("/register", function(req, res) {
  
    res.render("register");
});


module.exports = router;
