const { Enrollment } = require("../models");

// Helper function to populate detailed course data in enrollment
const populateEnrollmentData = (query) => {
  return query.populate({
    path: "course",
    populate: [
      { path: "instructor", select: "name email photo" },
      {
        path: "reviews",
        populate: {
          path: "user",
          select: "name email photo",
        },
      },
      { path: "syllabus" },
      { path: "enrolledStudents", select: "photo" },
      { path: "likes", select: "photo" },
    ],
  });
};

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
