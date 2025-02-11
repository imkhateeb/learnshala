const { courseRepository } = require("../../repositories");

const updateCourse = async (courseId, course) => {
  const updatedCourse = await courseRepository.updateCourse(courseId, course);
  return updatedCourse;
};

module.exports = updateCourse;
