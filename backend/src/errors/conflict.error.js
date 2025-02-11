const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

// Used when a request could not be completed due to a conflict with the current state of the resource.
class ConflictError extends BaseError {
  constructor(resourceName, details) {
    super(
      "Conflict Error",
      StatusCodes.CONFLICT,
      `Conflict with the resource: ${resourceName}`,
      details
    );
  }
}
module.exports = ConflictError;
