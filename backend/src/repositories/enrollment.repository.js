const { Enrollment } = require("../models");
const populateEnrollmentData = require("../utils/populateData/populateEnrollmentData");

const enrollmentRepository = {};

enrollmentRepository.create = async (enrollment) => {
  const newEnrollment = await Enrollment.create(enrollment);
  return await populateEnrollmentData(
    Enrollment.findById(newEnrollment._id)
  ).exec();
};

enrollmentRepository.getEnrollments = async (
  filters,
  page = 1,
  limit = 100
) => {
  const enrollments = await populateEnrollmentData(
    Enrollment.find(filters)
      .skip(page * limit)
      .limit(limit)
  ).exec();
  return enrollments;
};

enrollmentRepository.getEnrollmentByEnrollmentId = async (enrollmentId) => {
  const enrollment = await populateEnrollmentData(
    Enrollment.findById(enrollmentId)
  ).exec();
  return enrollment;
};

enrollmentRepository.getEnrollmentByCourseAndStudent = async (
  courseId,
  studentId
) => {
  const enrollment = await populateEnrollmentData(
    Enrollment.findOne({
      course: courseId,
      student: studentId,
    })
  ).exec();
  return enrollment;
};

enrollmentRepository.isEnrolled = async (courseId, studentId) => {
  const enrollment = await enrollmentRepository.getEnrollmentByCourseAndStudent(
    courseId,
    studentId
  );
  return enrollment;
};

enrollmentRepository.getEnrollmentByStudentId = async (studentId) => {
  const enrollments = await populateEnrollmentData(
    Enrollment.find({ student: studentId })
  ).exec();
  return enrollments;
};

module.exports = enrollmentRepository;
