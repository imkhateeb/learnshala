const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

// Used when the input validation fails.
class ValidationError extends BaseError {
  constructor(details) {
    super(
      "Validation Error",
      StatusCodes.UNPROCESSABLE_ENTITY,
      `Validation failed for your request`,
      details
    );
  }
}
module.exports = ValidationError;
