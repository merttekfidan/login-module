const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const testErr = (statusCode, message, res) => {
  res.status(statusCode).json({
    status: "fail",
    message,
  });
};

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
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
    if (!username || !password) testErr(500, "HATA", res);
    const user = await User.findOne({ username }).select("+password");
    if (!user.correctPassword(password, user.password))
      testErr(500, "HATA", res);
    createSendToken(user, 200, res);
  } catch (err) {
    testErr(200, "HATA", res);
  }
};

exports.protect = async (req, res) => {
  let token;
  if (
    req.header.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    testErr(500, "HATA", res);
  }
  res.status(200).json({
    status: "success",
    token,
  });
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
