const express = require("express");

exports.home = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "asd",
  });
};

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: "fail",
    data: "This function is not created yet",
  });
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
