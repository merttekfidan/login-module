const AppError = require("../utils/appError");
const sendErrorDev = (err, res) => {
  err.statusCode ? err.statusCode : (err.statusCode = 500);
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
module.exports = (err, req, res, next) => {
  sendErrorDev(err, res);
};
