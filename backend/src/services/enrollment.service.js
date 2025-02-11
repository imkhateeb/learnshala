const { enrollmentRepository, courseRepository } = require("../repositories");

const enrollmentService = {};

enrollmentService.createEnrollment = async (enrollmentData) => {
  // Example of additional business logic (e.g., checking if already enrolled)
  const { course, student } = enrollmentData;
  const isAlreadyEnrolled = await enrollmentRepository.isEnrolled(
    course,
    student
  );

  if (isAlreadyEnrolled) {
    throw new Error("Student is already enrolled in this course.");
  }

  // Proceed with creating the enrollment
  const newEnrollment = await enrollmentRepository.create(enrollmentData);
  return newEnrollment;
};

enrollmentService.getEnrollments = async (filters, page = 1, limit = 10) => {
  const enrollments = await enrollmentRepository.getEnrollments(
    filters,
    page,
    limit
  );
  return enrollments;
};

enrollmentService.getEnrollmentById = async (enrollmentId) => {
  const enrollment = await enrollmentRepository.getEnrollmentByEnrollmentId(
    enrollmentId
  );

  if (!enrollment) {
    throw new Error("Enrollment not found.");
  }

  return enrollment;
};

enrollmentService.getEnrollmentByCourseAndStudent = async (
  courseId,
  studentId
) => {
  const enrollment = await enrollmentRepository.getEnrollmentByCourseAndStudent(
    courseId,
    studentId
  );

  if (!enrollment) {
    throw new Error(
      "Enrollment not found for the specified course and student."
    );
  }

  return enrollment;
};

enrollmentService.isEnrolled = async (courseId, studentId) => {
  return await enrollmentRepository.isEnrolled(courseId, studentId);
};

enrollmentService.markEnrollmentAsCompleted = async (enrollmentId) => {
  const enrollment = await enrollmentService.getEnrollmentById(enrollmentId);

  if (enrollment.completed) {
    throw new Error("This enrollment is already marked as completed.");
  }

  enrollment.completed = true;
  await enrollment.save();
  return enrollment;
};

// Example of a complex service method
enrollmentService.enrollStudentInCourse = async (
  courseId,
  studentId,
  enrollmentData
) => {
  // Business logic: check if course exists
  const course = await courseRepository.getCourseByCourseId(courseId);

  if (!course) {
    throw new Error("Course not found.");
  }

  // Enroll the student
  const enrollment = await enrollmentService.createEnrollment({
    ...enrollmentData,
    course: courseId,
    student: studentId,
  });

  return enrollment;
};

enrollmentService.getEnrollmentsByStudentId = async (studentId) => {
  const enrollments = await enrollmentRepository.getEnrollmentByStudentId(
    studentId
  );
  return enrollments;
};

module.exports = enrollmentService;
