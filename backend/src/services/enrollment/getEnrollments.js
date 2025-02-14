const getEnrollments = async (filters, page = 1, limit = 10) => {
  const enrollments = await enrollmentRepository.getEnrollments(
    filters,
    page,
    limit
  );
  return enrollments;
};

module.exports = getEnrollments;
