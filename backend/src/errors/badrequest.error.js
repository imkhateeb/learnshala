// Bad Request Error
// This error is used when the client sends a request with invalid parameters or data.
const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "Bad Request Error",
      StatusCodes.BAD_REQUEST,
      `Invalid ${propertyName}`,
      details
    );
  }
}
module.exports = BadRequest;
