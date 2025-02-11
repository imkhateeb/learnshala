const authController = require("./auth.controller");
const courseController = require("./course.controller");
const enrollmentController = require("./enrollment.controller");
const userController = require("./user.controller");

module.exports = {
  authController,
  userController,
  courseController,
  enrollmentController,
};
