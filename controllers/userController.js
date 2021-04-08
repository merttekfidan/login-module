const express = require("express");
const User = require("./../models/userModel");
exports.home = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "asd",
  });
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};

/// ME PART
exports.deleteMe = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};
exports.getMe = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};
exports.updateMe = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};
