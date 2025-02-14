const isEnrolled = async (courseId, studentId) => {
  return await enrollmentRepository.isEnrolled(courseId, studentId);
};

module.exports = isEnrolled;
