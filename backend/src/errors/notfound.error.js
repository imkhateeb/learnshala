// Not Found Error
// This error is used when a requested resource is not found.
const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends BaseError {
  constructor(resourceName, resourceValue, details) {
    super(
      "Not Found Error",
      StatusCodes.NOT_FOUND,
      `The requested resource: ${resourceName} with value ${resourceValue} not found.`,
      details
    );
  }
}
module.exports = NotFoundError;
