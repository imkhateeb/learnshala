const markEnrollmentAsCompleted = async (enrollmentId) => {
  const enrollment = await enrollmentService.getEnrollmentById(enrollmentId);

  if (enrollment.completed) {
    throw new Error("This enrollment is already marked as completed.");
  }

  enrollment.completed = true;
  await enrollment.save();
  return enrollment;
};

module.exports = markEnrollmentAsCompleted;
