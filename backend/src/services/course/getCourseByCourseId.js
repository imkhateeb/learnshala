const NotFoundError = require("../../errors/notfound.error");
const { courseRepository } = require("../../repositories");

const getCourseByCourseId = async (courseId) => {
  const course = await courseRepository.getCourseByCourseId(courseId);
  if (!course) {
    throw new NotFoundError("Course", courseId, {
      msg: "Course not found",
    });
  }

  return course;
};

module.exports = getCourseByCourseId;
