const getEnrollmentsByStudentId = async (studentId) => {
  const enrollments = await enrollmentRepository.getEnrollmentByStudentId(
    studentId
  );
  return enrollments;
};

module.exports = getEnrollmentsByStudentId;
