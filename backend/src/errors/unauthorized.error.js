const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

// Used when authentication is required and has failed or not been provided.
class UnauthorizedError extends BaseError {
  constructor(details) {
    super(
      "Unauthorized Error",
      StatusCodes.UNAUTHORIZED,
      `Unauthorized access: Please provide a valid token`,
      details
    );
  }
}
module.exports = UnauthorizedError;
