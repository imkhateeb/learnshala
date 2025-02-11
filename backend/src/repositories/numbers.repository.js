const User = require("../models/user.model");
const Course = require("../models/course.model");
const Enrollment = require("../models/enrollment.model");

const getNumbers = async () => {
  const students = await User.countDocuments({ role: "student" });
  const instructors = await User.countDocuments({ role: "instructor" });
  const courses = await Course.countDocuments();
  const enrollments = await Enrollment.countDocuments();

  return {
    students,
    instructors,
    courses,
    enrollments,
  };
};

const getNumbersByCourseId = async (courseId) => {
  const course = await Course.findOne({ _id: courseId });
  return {
    students: course.enrolledStudents.length,
    likes: course.likes.length,
    reviews: course.reviews.length,
  };
};

const numbersRepository = {
  getNumbers,
  getNumbersByCourseId,
};

module.exports = numbersRepository;
