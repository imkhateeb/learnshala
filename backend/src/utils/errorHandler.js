// Error Handler Middleware
// This middleware catches all errors and sends a structured response.
const BaseError = require("../errors/base.error");
const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      status: "failure",
      msg: err.message,
      error: err.details,
      data: {}, // This is to ensure that the response always has a data key but because this is an exception, it will be empty
    });
  }

  // This is for unhandled errors
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: "failure",
    msg: "Internal Server Error",
    error: {
      msg: "Something went wrong",
    },
    data: {}, // This is to ensure that the response always has a data key but because this is an exception, it will be empty
  });
}
module.exports = errorHandler;
