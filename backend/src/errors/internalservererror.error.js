// Internal Server Error
// This error is used for unexpected server errors that are not the client's fault.
const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class InternalServerError extends BaseError {
  constructor(details) {
    super(
      "Internal Server Error",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong with the server`,
      details
    );
  }
}
module.exports = InternalServerError;
