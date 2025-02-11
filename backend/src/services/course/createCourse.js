const BadRequest = require("../../errors/badrequest.error");
const { courseRepository } = require("../../repositories");

const createCourse = async (course) => {
  if (!course) {
    throw new BadRequest("Invalid input", {
      msg: "Course data is required",
    });
  }

  const newCourse = await courseRepository.createCourse(course);

  return newCourse;
};

module.exports = createCourse;
