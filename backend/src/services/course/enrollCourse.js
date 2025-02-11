const ConflictError = require("../../errors/conflict.error");
const NotFoundError = require("../../errors/notfound.error");
const {
  courseRepository,
  enrollmentRepository,
} = require("../../repositories");

const enrollCourse = async (courseId, studentId, enrollmentData) => {
  if (!courseId) {
    throw new NotFoundError("courseId", courseId, {
      msg: "CourseId is required",
    });
  }
  if (!studentId) {
    throw new NotFoundError("studentId", studentId, {
      msg: "StudentId is required",
    });
  }
  if (!enrollmentData) {
    throw new NotFoundError("enrollmentData", enrollmentData, {
      msg: "Enrollment data is required",
    });
  }

  const course = await courseRepository.getCourseByCourseId(courseId);
  if (!course) {
    throw new NotFoundError("course", course, {
      msg: "Course not found",
    });
  }
  if (course.enrollmentStatus !== "In Progress") {
    throw new ConflictError("Course", {
      msg: "Course is not open for enrollment",
    });
  }

  const enrollment = await enrollmentRepository.getEnrollmentByCourseAndStudent(
    courseId,
    studentId
  );

  if (enrollment) {
    throw new ConflictError("Enrollment", {
      msg: "Student already enrolled in the course",
    });
  }

  enrollmentData.student = studentId;
  enrollmentData.course = courseId;

  const updatedCourse = await courseRepository.enrollCourse(
    courseId,
    studentId,
    enrollmentData
  );

  return updatedCourse;
};

module.exports = enrollCourse;
