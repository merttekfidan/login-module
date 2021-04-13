const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const AppError = require("./../utils/appError");
const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");

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
exports.signup = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      newUser,
    },
  });
});

exports.login = catchAsync(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return next(new AppError("Please provide a username and a password", 401));
  const user = await User.findOne({ username }).select("+password");
  if (!user.correctPassword(password, user.password))
    return next(new AppError("Incorrect username or password", 404));
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("Please log in to get access this area", 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) return next(new AppError("User not found", 404));

  req.user = currentUser;
  next();
});

exports.forgotPassword = (req, res, next) => {
  return next(new AppError("This route is not ready yet", 404));
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
