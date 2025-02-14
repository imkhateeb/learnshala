const getEnrollmentById = async (enrollmentId) => {
  const enrollment = await enrollmentRepository.getEnrollmentByEnrollmentId(
    enrollmentId
  );

  if (!enrollment) {
    throw new Error("Enrollment not found.");
  }

  return enrollment;
};

module.exports = getEnrollmentById;
