// Base Error Class
// This is the base class for all custom errors in the application.
// All other error classes will extend this class.
class BaseError extends Error {
  constructor(name, statusCode, description, details) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
  }
}
module.exports = BaseError;
