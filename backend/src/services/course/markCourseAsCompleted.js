const ConflictError = require("../../errors/conflict.error");
const NotFoundError = require("../../errors/notfound.error");
const {
  courseRepository,
  enrollmentRepository,
} = require("../../repositories");

const markCourseAsCompleted = async (courseId, userId) => {
  const enrollment = await enrollmentRepository.getEnrollmentByCourseAndStudent(
    courseId,
    userId
  );
  if (!enrollment) {
    throw new NotFoundError("Enrollment", `${courseId} ${userId}`, {
      msg: "Enrollment not found",
    });
  }
  if (enrollment.completed) {
    throw new ConflictError("Enrollment", {
      msg: "Enrollment is already completed",
    });
  }
  const course = await courseRepository.markCourseAsCompleted(enrollment._id);
  return course;
};

module.exports = markCourseAsCompleted;
