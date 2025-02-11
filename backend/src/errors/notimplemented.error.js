// Not Implemented Error
// This error is used when a requested method or functionality is not implemented.
const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotImplemented extends BaseError {
  constructor(methodName, details) {
    super(
      "Not Implemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not Implemented`,
      details
    );
  }
}
module.exports = NotImplemented;
