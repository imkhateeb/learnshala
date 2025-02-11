const adminValidator = require("./admin.validator");
const studentValidator = require("./student.validator");
const instructorValidator = require("./instructor.validator");
const userValidator = require("./userValidator");

const validator = {
  adminValidator,
  studentValidator,
  instructorValidator,
  userValidator,
};

module.exports = validator;
