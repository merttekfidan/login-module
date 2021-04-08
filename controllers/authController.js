const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./../models/userModel");
const testErr = (statusCode, message, req, res) => {
  res.status(statusCode).json({
    status: "fail",
    message,
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) testErr(500, "HATA", req, res);
    const user = await User.findOne({ username }).select("+password");
    if (bcrypt.compare(req.body.password, user.password))
      res.status(200).json({
        status: "success",
        data: user,
      });
  } catch (err) {
    testErr(200, "HATA", req, res);
  }
};

exports.forgotPassword = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};
exports.resetPassword = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};

exports.restrictTo = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};
