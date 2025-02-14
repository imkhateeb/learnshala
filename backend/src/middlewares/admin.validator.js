const User = require("../models/user.model");
const verifyToken = require("../utils/verifyToken");
const UnauthorizedError = require("../errors/unauthorized.error");
const NotFoundError = require("../errors/notfound.error");

// Put correct error fields
const adminValidator = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new UnauthorizedError({
        msg: "Authorization token missing or malformed",
      });
    }
    const userId = verifyToken(req.headers.authorization);

    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError("User", userId, {
        msg: "Authorization token missing or malformed",
      });
    }

    if (user.role !== "admin") {
      throw new UnauthorizedError({
        msg: "Only Admin can make this request",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminValidator;
