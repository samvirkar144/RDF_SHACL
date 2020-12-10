var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
  fullName: String,
  image: String,
  imageId: String,
  joined: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
