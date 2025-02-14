const createEnrollment = async (enrollmentData) => {
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

module.exports = createEnrollment;
