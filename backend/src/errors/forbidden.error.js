const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

// Used when the user does not have the necessary permissions for the resource.
class ForbiddenError extends BaseError {
  constructor(action, resource, details) {
    super(
      "Forbidden Error",
      StatusCodes.FORBIDDEN,
      `You do not have permission to ${action} the ${resource}`,
      details
    );
  }
}
module.exports = ForbiddenError;
