require("dotenv").config();
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  User = require("./models/user"),
  methodOverride = require("method-override"),
  flash = require("connect-flash");

// Requiring routes
var indexRoutes = require("./routes/index");

// mongoose.connect({
// name: 'MYSQL',
// connector: 'mysql',
// host: 'localhost',
// port: 3306,
// user: 'newuser',
// password: 'Pass@1234',
// database: 'AuthDB'
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIG
app.use(
  require("express-session")({
    secret: "shibas are the best dogs in the world.",
    resave: false,
    saveUninitialized: false
  })
);
app.locals.moment = require("moment");

app.use("/", indexRoutes);

app.get("*", function(req, res) {
  res.render("error");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on http://localhost:3000/");
});
