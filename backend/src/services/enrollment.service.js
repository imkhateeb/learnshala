const calculateProgress = require("./enrollment/calculateProgress");
const createEnrollment = require("./enrollment/createEnrollment");
const enrollStudentInCourse = require("./enrollment/enrollStudentInCourse");
const getEnrollmentByCourseAndStudent = require("./enrollment/getEnrollmentByCourseAndStudent");
const getEnrollmentById = require("./enrollment/getEnrollmentById");
const getEnrollments = require("./enrollment/getEnrollments");
const getEnrollmentsByStudentId = require("./enrollment/getEnrollmentsByStudentId");
const isEnrolled = require("./enrollment/isEnrolled");
const markEnrollmentAsCompleted = require("./enrollment/markEnrollmentAsCompleted");

const enrollmentService = {
  calculateProgress,
  createEnrollment,
  enrollStudentInCourse,
  getEnrollmentByCourseAndStudent,
  getEnrollmentById,
  getEnrollments,
  getEnrollmentsByStudentId,
  isEnrolled,
  markEnrollmentAsCompleted,
};

module.exports = enrollmentService;
