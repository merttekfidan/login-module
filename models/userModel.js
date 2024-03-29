const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: String,
  email: String,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (
  actualPassword,
  reqPassword
) {
  return await bcrypt.compare(reqPassword, actualPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
