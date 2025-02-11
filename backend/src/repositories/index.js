const authRepository = require("./auth.repository");
const courseRepository = require("./course.repository");
const enrollmentRepository = require("./enrollment.repository");
const numbersRepository = require("./numbers.repository");
const reviewRepository = require("./review.repository");
const userRepository = require("./user.repository");

module.exports = {
  authRepository,
  courseRepository,
  numbersRepository,
  userRepository,
  enrollmentRepository,
  reviewRepository,
};
