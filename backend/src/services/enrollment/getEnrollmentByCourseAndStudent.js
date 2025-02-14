const getEnrollmentByCourseAndStudent = async (courseId, studentId) => {
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

module.exports = getEnrollmentByCourseAndStudent;
