const enrollStudentInCourse = async (courseId, studentId, enrollmentData) => {
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

module.exports = enrollStudentInCourse;
